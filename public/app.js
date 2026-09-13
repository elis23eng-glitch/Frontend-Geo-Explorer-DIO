const tracks = {
  iniciante: {
    label: 'Iniciante',
    title: 'Fundamentos do Front-End',
    description: 'Primeiros passos no desenvolvimento web: estrutura, estilo e lógica básica.',
    modules: [
      { title: 'HTML5 — Estruturando a Web', hours: 6, description: 'Estruture páginas com HTML5, tags semânticas, formulários, tabelas e boas práticas de acessibilidade.', topics: ['HTML semântico', 'Formulários', 'Tabelas e listas', 'Acessibilidade', 'SEO básico'], challenges: ['Crie uma página de portfólio usando header, main, section e footer.', 'Monte um formulário de contato acessível com validação dos campos.', 'Construa uma tabela com cinco produtos fictícios, preços e categorias.'] },
      { title: 'CSS3 — Estilizando a Web', hours: 8, description: 'Crie interfaces modernas e responsivas utilizando Flexbox, Grid e variáveis CSS.', topics: ['Box model', 'Flexbox', 'CSS Grid', 'Media queries', 'Variáveis CSS'], challenges: ['Crie uma galeria responsiva que alterne entre uma, duas e três colunas.', 'Monte um card de produto com Flexbox e estados de interação.', 'Desenvolva um menu responsivo com transições e foco visível.'] },
      { title: 'Git e GitHub — Versionando Código', hours: 4, description: 'Organize versões, branches e entregas para publicar projetos com segurança.', topics: ['Commit', 'Branches', 'Merge', 'Pull Request', 'GitHub Pages'], challenges: ['Crie branches main e develop e simule um fluxo de merge.', 'Documente um projeto fictício em um README claro e reproduzível.', 'Implemente uma feature em branch própria e descreva um Pull Request.'] }
    ]
  },
  intermediario: {
    label: 'Intermediário',
    title: 'JavaScript e Interatividade',
    description: 'Aplicações dinâmicas com JavaScript moderno, eventos, dados e consumo de APIs.',
    modules: [
      { title: 'JavaScript Essencial', hours: 10, description: 'Aplique funções, eventos, arrays, objetos e manipulação do DOM em soluções interativas.', topics: ['Funções', 'DOM', 'Eventos', 'Arrays e objetos', 'ES6+'], challenges: ['Crie um carrinho que permita adicionar, remover e calcular o total.', 'Implemente uma calculadora no DOM com as quatro operações.', 'Filtre uma lista de produtos e apresente apenas itens abaixo de R$ 100.'] },
      { title: 'JavaScript Assíncrono e APIs', hours: 8, description: 'Consuma APIs REST com fetch, Promises e async/await, incluindo tratamento de erros.', topics: ['Promises', 'Async/await', 'Fetch API', 'REST', 'JSON'], challenges: ['Consuma a API ViaCEP e apresente o endereço a partir de um CEP.', 'Liste os cinco repositórios mais recentes de um usuário do GitHub.', 'Crie um estado de carregamento e trate falhas de uma requisição.'] },
      { title: 'Hooks e Componentização', hours: 6, description: 'Crie componentes reutilizáveis e gerencie estados locais com hooks.', topics: ['Componentes', 'useState', 'useEffect', 'Hooks customizados', 'Composição'], challenges: ['Construa um contador com incrementar, decrementar e redefinir.', 'Crie um componente de busca com estado e mensagens de feedback.', 'Extraia uma lógica repetida para um hook customizado.'] },
      { title: 'CSS Avançado e Animações', hours: 6, description: 'Aplique transições, animações, pseudo-elementos e organização escalável de estilos.', topics: ['Keyframes', 'Transições', 'Pseudo-elementos', 'BEM', 'CSS Modules'], challenges: ['Crie um botão com animação de carregamento usando keyframes.', 'Implemente um card com efeito de profundidade e movimento reduzido.', 'Monte um skeleton screen para uma lista de conteúdos.'] }
    ]
  },
  avancado: {
    label: 'Avançado',
    title: 'React e Ecossistema Moderno',
    description: 'Aplicações completas e escaláveis com componentes, estado, rotas e integração com serviços.',
    modules: [
      { title: 'React — Fundamentos', hours: 12, description: 'Construa interfaces reativas com componentes funcionais, props, state e JSX.', topics: ['Componentes', 'Props', 'State', 'JSX', 'Renderização condicional'], challenges: ['Crie uma lista de produtos recebida por props com preço formatado.', 'Implemente um formulário controlado com validação básica.', 'Construa uma tela com estados de vazio, carregamento e sucesso.'] },
      { title: 'React Hooks e Estado', hours: 10, description: 'Gerencie estado local e global com hooks, Context API e padrões de reutilização.', topics: ['useState', 'useEffect', 'useContext', 'useMemo', 'Context API'], challenges: ['Crie um hook useFetch com data, loading e error.', 'Implemente um carrinho global utilizando Context API.', 'Otimize uma lista filtrável com memoização responsável.'] },
      { title: 'React com APIs e Deploy', hours: 8, description: 'Integre rotas e APIs, organize variáveis de ambiente e prepare a aplicação para publicação.', topics: ['React Router', 'APIs', 'Autenticação', 'Variáveis de ambiente', 'Deploy'], challenges: ['Crie três rotas com navegação e página de erro.', 'Implemente uma camada de serviço para consumo de uma API.', 'Prepare configurações de ambiente e publique uma aplicação de teste.'] }
    ]
  }
};

const state = { level: 'iniciante', selectedModule: 0, completed: new Set() };
const elements = {
  levelButtons: [...document.querySelectorAll('.level-button')],
  levelLabel: document.getElementById('level-label'),
  trackTitle: document.getElementById('track-title'),
  trackDescription: document.getElementById('track-description'),
  statModules: document.getElementById('stat-modules'),
  statHours: document.getElementById('stat-hours'),
  statProgress: document.getElementById('stat-progress'),
  moduleList: document.getElementById('module-list'),
  moduleDetail: document.getElementById('module-detail'),
  challengeCard: document.getElementById('challenge-card'),
  challengeButton: document.getElementById('generate-challenge'),
  nameInput: document.getElementById('student-name'),
  certificateButton: document.getElementById('generate-certificate'),
  certificateResult: document.getElementById('certificate-result')
};

function activeTrack() { return tracks[state.level]; }
function moduleKey(index) { return `${state.level}:${index}`; }
function escapeXml(value) { return String(value).replace(/[<>&'\"]/g, char => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[char])); }

function updateStats() {
  const track = activeTrack();
  const completed = track.modules.filter((_, index) => state.completed.has(moduleKey(index))).length;
  elements.statModules.textContent = track.modules.length;
  elements.statHours.textContent = `${track.modules.reduce((sum, item) => sum + item.hours, 0)}h`;
  elements.statProgress.textContent = `${Math.round((completed / track.modules.length) * 100)}%`;
}

function renderModuleDetail() {
  const module = activeTrack().modules[state.selectedModule];
  elements.moduleDetail.replaceChildren();
  const label = document.createElement('p');
  label.className = 'micro-label';
  label.textContent = `${module.hours} HORAS · MÓDULO ${String(state.selectedModule + 1).padStart(2, '0')}`;
  const title = document.createElement('h3');
  title.textContent = module.title;
  const description = document.createElement('p');
  description.textContent = module.description;
  const topics = document.createElement('div');
  topics.className = 'topic-list';
  module.topics.forEach(topicText => {
    const topic = document.createElement('span');
    topic.className = 'topic';
    topic.textContent = topicText;
    topics.append(topic);
  });
  elements.moduleDetail.append(label, title, description, topics);
}

function renderModules() {
  elements.moduleList.replaceChildren();
  activeTrack().modules.forEach((module, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `module-button${index === state.selectedModule ? ' is-active' : ''}`;
    button.setAttribute('role', 'listitem');
    button.setAttribute('aria-pressed', String(index === state.selectedModule));
    const number = document.createElement('span');
    number.className = 'module-index';
    number.textContent = String(index + 1).padStart(2, '0');
    const title = document.createElement('span');
    title.className = 'module-title';
    title.textContent = module.title;
    const hours = document.createElement('span');
    hours.className = 'module-hours';
    hours.textContent = `${module.hours}h`;
    button.append(number, title, hours);
    button.addEventListener('click', () => {
      state.selectedModule = index;
      state.completed.add(moduleKey(index));
      renderModules();
      renderModuleDetail();
      updateStats();
    });
    elements.moduleList.append(button);
  });
}

function renderLevel() {
  const track = activeTrack();
  elements.levelButtons.forEach(button => {
    const active = button.dataset.level === state.level;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  elements.levelLabel.textContent = `NÍVEL ${track.label.toUpperCase()}`;
  elements.trackTitle.textContent = track.title;
  elements.trackDescription.textContent = track.description;
  state.selectedModule = 0;
  renderModules();
  renderModuleDetail();
  updateStats();
  elements.challengeCard.innerHTML = '<p class="micro-label">PRONTO PARA PRATICAR</p><h3>Seu próximo desafio aparecerá aqui.</h3><p>Use a proposta como ponto de partida e registre sua solução no GitHub.</p>';
}

elements.levelButtons.forEach(button => button.addEventListener('click', () => {
  state.level = button.dataset.level;
  renderLevel();
}));

elements.challengeButton.addEventListener('click', () => {
  const modules = activeTrack().modules;
  const moduleIndex = Math.floor(Math.random() * modules.length);
  const module = modules[moduleIndex];
  const challenge = module.challenges[Math.floor(Math.random() * module.challenges.length)];
  state.selectedModule = moduleIndex;
  state.completed.add(moduleKey(moduleIndex));
  renderModules();
  renderModuleDetail();
  updateStats();
  elements.challengeCard.replaceChildren();
  const label = document.createElement('p');
  label.className = 'micro-label';
  label.textContent = `${activeTrack().label.toUpperCase()} · ${module.title.toUpperCase()}`;
  const title = document.createElement('h3');
  title.textContent = challenge;
  const tip = document.createElement('p');
  tip.textContent = 'Critério de conclusão: solução funcional, teste do fluxo principal e documentação das decisões no README.';
  elements.challengeCard.append(label, title, tip);
});

elements.certificateButton.addEventListener('click', () => {
  const rawName = elements.nameInput.value.trim() || 'Estudante';
  const name = escapeXml(rawName.slice(0, 60));
  const track = activeTrack();
  const hours = track.modules.reduce((sum, module) => sum + module.hours, 0);
  const date = new Intl.DateTimeFormat('pt-BR').format(new Date());
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#07111f"/><stop offset="1" stop-color="#122b44"/></linearGradient></defs><rect width="1200" height="800" fill="url(#b)"/><rect x="65" y="65" width="1070" height="670" rx="28" fill="none" stroke="#4de3a2" stroke-width="4"/><text x="600" y="150" text-anchor="middle" font-family="Arial" font-size="26" font-weight="700" fill="#4de3a2" letter-spacing="5">GEO-EXPLORER</text><text x="600" y="230" text-anchor="middle" font-family="Arial" font-size="48" font-weight="700" fill="#eef5ff">CERTIFICADO DEMONSTRATIVO</text><text x="600" y="305" text-anchor="middle" font-family="Arial" font-size="23" fill="#9fb1c8">Certificamos, para fins de simulação educacional, que</text><text x="600" y="390" text-anchor="middle" font-family="Arial" font-size="44" font-weight="700" fill="#6da8ff">${name.toUpperCase()}</text><text x="600" y="458" text-anchor="middle" font-family="Arial" font-size="24" fill="#eef5ff">concluiu a trilha ${escapeXml(track.title)}</text><text x="600" y="520" text-anchor="middle" font-family="Arial" font-size="21" fill="#9fb1c8">Nível ${track.label} · ${hours} horas · ${date}</text><rect x="410" y="590" width="380" height="58" rx="29" fill="#4de3a2"/><text x="600" y="627" text-anchor="middle" font-family="Arial" font-size="20" font-weight="700" fill="#052117">DOCUMENTO FICTÍCIO · DEMONSTRAÇÃO</text></svg>`;
  const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
  elements.certificateResult.classList.add('is-ready');
  elements.certificateResult.replaceChildren();
  const label = document.createElement('p');
  label.className = 'micro-label';
  label.textContent = 'CERTIFICADO GERADO';
  const text = document.createElement('p');
  text.innerHTML = `<strong>${name}</strong><br>${track.title} · ${track.label} · ${hours}h`;
  const disclaimer = document.createElement('p');
  disclaimer.className = 'disclaimer';
  disclaimer.textContent = 'Documento fictício criado exclusivamente para demonstrar a funcionalidade.';
  const link = document.createElement('a');
  link.className = 'download-link';
  link.href = url;
  link.download = `certificado-geo-explorer-${state.level}.svg`;
  link.textContent = 'Baixar demonstração';
  elements.certificateResult.append(label, text, disclaimer, link);
});

renderLevel();
