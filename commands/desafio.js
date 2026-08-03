const fs = require('fs');
const path = require('path');

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
    'Monte um skeleton screen (tela de carregamento) para simular o carregamento de uma lista de cards.'
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
    'Implemente autenticação simples com JWT: tela de login, guarda de rota e exibição de dados do usuário logado.',
    'Configure variáveis de ambiente no React e faça o deploy de uma aplicação na Vercel conectada ao GitHub.'
  ]
};

function carregarTrilhas() {
  const caminho = path.join(__dirname, '..', 'data', 'trilhas.json');
  const conteudo = fs.readFileSync(caminho, 'utf-8');
  return JSON.parse(conteudo);
}

function gerarDesafio(nivel) {
  const dados = carregarTrilhas();

  const nivelNormalizado = nivel.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const trilha = dados.trilhas.find(t =>
    t.nivel.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === nivelNormalizado
  );

  if (!trilha) {
    console.log(`\n❌ Nível não encontrado: "${nivel}"`);
    console.log(`   Níveis disponíveis: iniciante, intermediario, avancado\n`);
    return;
  }

  const modulo = trilha.modulos[Math.floor(Math.random() * trilha.modulos.length)];
  const desafiosDoModulo = desafiosPorModulo[modulo.titulo] || [];
  const desafio = desafiosDoModulo[Math.floor(Math.random() * desafiosDoModulo.length)];

  console.log(`\n🚀  Desafio Geo Explorer`);
  console.log(`────────────────────────────────────────────────`);
  console.log(`📊  Nível   : ${trilha.nivel}`);
  console.log(`📦  Módulo  : ${modulo.titulo}`);
  console.log(`\n🎯  Desafio :`);
  console.log(`    "${desafio}"`);
  console.log(`────────────────────────────────────────────────\n`);
}

if (require.main === module) {
  const nivel = process.argv[2] || 'iniciante';
  gerarDesafio(nivel);
}

module.exports = {
  gerarDesafio,
  carregarTrilhas
};
