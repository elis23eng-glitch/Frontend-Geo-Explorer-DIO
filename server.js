const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

function lerJson(relPath) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, relPath), 'utf-8'));
}

function normalizarNivel(nivel) {
  return String(nivel || 'iniciante').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function selecionarTrilha(nivel) {
  const dados = lerJson('data/trilhas.json');
  const nivelNormalizado = normalizarNivel(nivel);
  return dados.trilhas.find((t) => normalizarNivel(t.nivel) === nivelNormalizado) || null;
}

function gerarDesafioAleatorio(nivel) {
  const dados = lerJson('data/trilhas.json');
  const trilha = selecionarTrilha(nivel);

  if (!trilha) return null;

  const desafios = {
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

  const modulo = trilha.modulos[Math.floor(Math.random() * trilha.modulos.length)];
  const opcoes = desafios[modulo.titulo] || [];
  const texto = opcoes[Math.floor(Math.random() * opcoes.length)] || 'Sem desafio disponível.';

  return {
    tecnologia: dados.tecnologia,
    nivel: trilha.nivel,
    titulo: trilha.titulo,
    descricao: trilha.descricao,
    modulo: modulo.titulo,
    desafio: texto
  };
}

function gerarImagemCertificado(nome, trilha, carga, data) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8fafc" />
          <stop offset="100%" stop-color="#e2e8f0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#bg)" />
      <rect x="70" y="70" width="1060" height="660" rx="28" fill="#ffffff" stroke="#1d4ed8" stroke-width="6" />
      <rect x="105" y="105" width="990" height="590" rx="18" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 8" />
      <text x="600" y="170" text-anchor="middle" font-family="Arial" font-size="38" font-weight="700" fill="#0f172a">CERTIFICADO DE CONCLUSÃO</text>
      <text x="600" y="230" text-anchor="middle" font-family="Arial" font-size="22" fill="#475569">Projeto de Teste — Geo Explorer</text>
      <text x="600" y="310" text-anchor="middle" font-family="Arial" font-size="28" fill="#0f172a">Certificamos que</text>
      <text x="600" y="375" text-anchor="middle" font-family="Arial" font-size="34" font-weight="700" fill="#1d4ed8">${String(nome || 'ESTUDANTE').toUpperCase()}</text>
      <text x="600" y="435" text-anchor="middle" font-family="Arial" font-size="22" fill="#334155">concluiu com êxito a trilha</text>
      <text x="600" y="490" text-anchor="middle" font-family="Arial" font-size="30" font-weight="700" fill="#0f172a">${trilha.titulo}</text>
      <text x="600" y="560" text-anchor="middle" font-family="Arial" font-size="20" fill="#334155">Nível: ${trilha.nivel} • Carga horária: ${carga}</text>
      <text x="600" y="595" text-anchor="middle" font-family="Arial" font-size="20" fill="#334155">Emissor: DIO GLOBAL</text>
      <text x="600" y="640" text-anchor="middle" font-family="Arial" font-size="20" fill="#334155">Data: ${data}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function montarCertificado(nome, nivel) {
  const dados = lerJson('data/trilhas.json');
  const trilha = selecionarTrilha(nivel);
  if (!trilha) return null;

  const totalHoras = trilha.modulos.reduce((acc, mod) => acc + Number.parseInt(mod.carga_horaria, 10), 0);
  const data = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  const imagem = gerarImagemCertificado(nome, trilha, `${totalHoras}h`, data);

  return {
    nome: String(nome || 'Estudante').toUpperCase(),
    tecnologia: dados.tecnologia,
    titulo: trilha.titulo,
    nivel: trilha.nivel,
    carga: `${totalHoras}h`,
    emissor: 'DIO GLOBAL',
    data,
    ficticio: true,
    frase: 'O aprendizado é a única coisa que a mente nunca esgota, nunca teme e nunca se arrepende.',
    imagem
  };
}

function servirArquivo(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Arquivo não encontrado');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'GET' && url.pathname === '/') {
    servirArquivo(res, path.join(PUBLIC_DIR, 'index.html'), 'text/html; charset=utf-8');
    return;
  }

  if (req.method === 'GET' && url.pathname === '/styles.css') {
    servirArquivo(res, path.join(PUBLIC_DIR, 'styles.css'), 'text/css; charset=utf-8');
    return;
  }

  if (req.method === 'GET' && url.pathname === '/app.js') {
    servirArquivo(res, path.join(PUBLIC_DIR, 'app.js'), 'application/javascript; charset=utf-8');
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/trilha') {
    const nivel = url.searchParams.get('nivel') || 'iniciante';
    const trilha = selecionarTrilha(nivel);

    if (!trilha) {
      res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ erro: 'Nível não encontrado' }));
      return;
    }

    const payload = {
      tecnologia: lerJson('data/trilhas.json').tecnologia,
      nivel: trilha.nivel,
      titulo: trilha.titulo,
      descricao: trilha.descricao,
      modulos: trilha.modulos
    };

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(payload));
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/desafio') {
    const nivel = url.searchParams.get('nivel') || 'iniciante';
    const desafio = gerarDesafioAleatorio(nivel);

    if (!desafio) {
      res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ erro: 'Nível não encontrado' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(desafio));
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/certificado') {
    const nome = url.searchParams.get('nome') || 'Estudante';
    const nivel = url.searchParams.get('nivel') || 'iniciante';
    const certificado = montarCertificado(nome, nivel);

    if (!certificado) {
      res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ erro: 'Nível não encontrado' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(certificado));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
});

server.listen(PORT, () => {
  console.log(`Servidor web rodando em http://localhost:${PORT}`);
});
