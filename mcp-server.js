#!/usr/bin/env node
'use strict';

const { McpServer }            = require('./node_modules/@modelcontextprotocol/sdk/dist/cjs/server/mcp.js');
const { StdioServerTransport } = require('./node_modules/@modelcontextprotocol/sdk/dist/cjs/server/stdio.js');
const { z }                    = require('./node_modules/zod/v4/index.cjs');
const { readFileSync }         = require('fs');
const { join }                 = require('path');

// ─── helpers ────────────────────────────────────────────────────────────────

function carregarTrilhas() {
  const caminho = join(__dirname, 'data', 'trilhas.json');
  return JSON.parse(readFileSync(caminho, 'utf-8'));
}

function normalizarNivel(nivel) {
  return nivel.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function encontrarTrilha(dados, nivel) {
  const n = normalizarNivel(nivel);
  return dados.trilhas.find(t => normalizarNivel(t.nivel) === n) || null;
}

// ─── desafios por módulo ────────────────────────────────────────────────────

const desafiosPorModulo = {
  'HTML5 - Estruturando a Web': [
    'Crie uma página HTML semântica com header, main e footer. Inclua um formulário de contato com campos de nome, e-mail e mensagem.',
    'Monte uma tabela HTML com 5 produtos fictícios contendo: nome, preço e categoria.',
    'Construa uma página de portfólio pessoal usando apenas HTML5 com tags semânticas.'
  ],
  'CSS3 - Estilizando a Web': [
    'Crie um layout de cartão de produto usando Flexbox com imagem, título, descrição e botão de compra.',
    'Monte uma grade de galeria de fotos responsiva com CSS Grid que se adapte a 1, 2 e 3 colunas.',
    'Implemente um menu de navegação horizontal com hover animado usando apenas CSS3.'
  ],
  'Git e GitHub - Versionando seu Código': [
    'Inicialize um repositório Git, crie duas branches (main e develop), faça commits em cada uma e realize um merge.',
    'Crie um arquivo README.md para um projeto fictício seguindo boas práticas de documentação no GitHub.',
    'Simule um fluxo de Pull Request: crie uma branch de feature, faça commits e descreva as alterações.'
  ],
  'JavaScript Essencial': [
    'Crie uma função que recebe uma lista de produtos com preços e retorna apenas os que custam menos de R$ 100.',
    'Implemente uma calculadora simples no DOM com as 4 operações básicas usando eventos JavaScript.',
    'Construa um carrinho de compras em JavaScript puro que permite adicionar, remover e exibir o total dos itens.'
  ],
  'JavaScript Assíncrono e APIs': [
    'Consuma a API pública https://viacep.com.br/ws/{cep}/json/ e exiba o endereço completo a partir de um CEP digitado.',
    'Crie uma função async/await que busca os 5 repositórios mais recentes de um usuário na API do GitHub.',
    'Implemente um buscador de filmes usando a API do Open Movie Database (OMDb) com tratamento de erros.'
  ],
  'CSS Avançado e Animações': [
    'Crie um botão com animação de loading usando apenas CSS @keyframes.',
    'Implemente um card com efeito de flip 3D ao passar o mouse usando CSS transform.',
    'Monte um skeleton screen para simular o carregamento de uma lista de cards.'
  ],
  'React - Fundamentos': [
    'Crie um componente React que exibe uma lista de produtos recebida via props, com nome e preço formatado.',
    'Implemente um contador com useState que possui botões de incrementar, decrementar e resetar.',
    'Construa um componente de formulário controlado em React para cadastro de usuário com validação básica.'
  ],
  'React Hooks e Gerenciamento de Estado': [
    'Crie um hook customizado useFetch que busca dados de qualquer URL e retorna { data, loading, error }.',
    'Implemente um carrinho de compras global usando Context API com as ações de adicionar e remover itens.',
    'Construa um componente que usa useEffect para buscar dados de uma API ao montar e exibir um loading.'
  ],
  'React com APIs e Deploy': [
    'Crie uma aplicação React com React Router que possui 3 páginas: Home, Sobre e Contato.',
    'Implemente autenticação simples com JWT: tela de login, guarda de rota e exibição do usuário logado.',
    'Configure variáveis de ambiente no React e faça o deploy de uma aplicação na Vercel conectada ao GitHub.'
  ]
};

// ─── servidor MCP ────────────────────────────────────────────────────────────

const server = new McpServer({ name: 'geo-explorer', version: '1.0.0' });

// tool: trilha
server.registerTool(
  'trilha',
  {
    description: 'Retorna os módulos de uma trilha Front-End pelo nível (iniciante, intermediario, avancado)',
    inputSchema: z.object({
      nivel: z.string().describe('Nível da trilha: iniciante | intermediario | avancado')
    })
  },
  async ({ nivel }) => {
    try {
      const dados  = carregarTrilhas();
      const trilha = encontrarTrilha(dados, nivel);
      if (!trilha) {
        return {
          content: [{ type: 'text', text: JSON.stringify({ erro: `Nível "${nivel}" não encontrado. Use: iniciante, intermediario ou avancado.` }) }],
          isError: true
        };
      }
      return {
        content: [{ type: 'text', text: JSON.stringify({ tecnologia: dados.tecnologia, ...trilha }, null, 2) }]
      };
    } catch (e) {
      return { content: [{ type: 'text', text: JSON.stringify({ erro: e.message }) }], isError: true };
    }
  }
);

// tool: desafio
server.registerTool(
  'desafio',
  {
    description: 'Gera um desafio prático aleatório baseado no nível da trilha Front-End',
    inputSchema: z.object({
      nivel: z.string().describe('Nível da trilha: iniciante | intermediario | avancado')
    })
  },
  async ({ nivel }) => {
    try {
      const dados  = carregarTrilhas();
      const trilha = encontrarTrilha(dados, nivel);
      if (!trilha) {
        return {
          content: [{ type: 'text', text: JSON.stringify({ erro: `Nível "${nivel}" não encontrado. Use: iniciante, intermediario ou avancado.` }) }],
          isError: true
        };
      }
      const modulo    = trilha.modulos[Math.floor(Math.random() * trilha.modulos.length)];
      const lista     = desafiosPorModulo[modulo.titulo] || [];
      const enunciado = lista[Math.floor(Math.random() * lista.length)] || 'Desafio não disponível.';
      return {
        content: [{ type: 'text', text: JSON.stringify({ nivel: trilha.nivel, modulo: modulo.titulo, desafio: enunciado }, null, 2) }]
      };
    } catch (e) {
      return { content: [{ type: 'text', text: JSON.stringify({ erro: e.message }) }], isError: true };
    }
  }
);

// tool: certificado
server.registerTool(
  'certificado',
  {
    description: 'Gera um certificado fictício de conclusão de trilha Front-End',
    inputSchema: z.object({
      nome:  z.string().describe('Nome completo da pessoa usuária'),
      nivel: z.string().describe('Nível da trilha concluída: iniciante | intermediario | avancado')
    })
  },
  async ({ nome, nivel }) => {
    try {
      const dados  = carregarTrilhas();
      const trilha = encontrarTrilha(dados, nivel);
      if (!trilha) {
        return {
          content: [{ type: 'text', text: JSON.stringify({ erro: `Nível "${nivel}" não encontrado. Use: iniciante, intermediario ou avancado.` }) }],
          isError: true
        };
      }
      const totalHoras  = trilha.modulos.reduce((acc, m) => acc + parseInt(m.carga_horaria), 0);
      const dataEmissao = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
      const certificado = {
        titulo:        'Certificado de Conclusão',
        nome:          nome.toUpperCase(),
        trilha:        trilha.titulo,
        nivel:         trilha.nivel,
        tecnologia:    dados.tecnologia,
        carga_horaria: `${totalHoras}h`,
        data_emissao:  dataEmissao,
        emissor:       'DIO - Digital Innovation One'
      };
      return {
        content: [{ type: 'text', text: JSON.stringify(certificado, null, 2) }]
      };
    } catch (e) {
      return { content: [{ type: 'text', text: JSON.stringify({ erro: e.message }) }], isError: true };
    }
  }
);

// ─── start ───────────────────────────────────────────────────────────────────

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('geo-explorer MCP server running on stdio');
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
