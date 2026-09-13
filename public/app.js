function moduleData(title, hours, description, topics, challenge, brief) {
  return { title, hours, description, topics, challenge, brief };
}

const catalog = {
  frontend: {
    label: 'Front-End', icon: '</>', description: 'Interfaces acessíveis, responsivas e orientadas à experiência do usuário.',
    levels: {
      iniciante: { title: 'Fundamentos do Front-End', description: 'Estrutura, estilo e versionamento para construir as primeiras experiências web.', modules: [
        moduleData('HTML Semântico e Acessibilidade', 6, 'Estruture páginas claras, acessíveis e preparadas para mecanismos de busca.', ['Semântica', 'Formulários', 'ARIA', 'SEO básico'], 'Portal de serviços acessível', 'Construa uma página de serviços com navegação por teclado, formulário validado e hierarquia semântica.'),
        moduleData('CSS Responsivo', 8, 'Crie layouts fluidos com Grid, Flexbox e boas práticas de responsividade.', ['Box model', 'Flexbox', 'Grid', 'Media queries'], 'Galeria responsiva multitelas', 'Implemente uma galeria que se adapte a celular, tablet e desktop sem rolagem horizontal.'),
        moduleData('Git e GitHub', 4, 'Versione entregas, organize branches e documente decisões técnicas.', ['Commit', 'Branches', 'Merge', 'README'], 'Fluxo de entrega versionado', 'Crie uma feature em branch própria, registre commits claros e documente um Pull Request simulado.')
      ]},
      intermediario: { title: 'JavaScript e Interatividade', description: 'Comportamentos dinâmicos, consumo de dados e componentes reutilizáveis.', modules: [
        moduleData('JavaScript e DOM', 10, 'Manipule eventos, estados e elementos da interface com JavaScript moderno.', ['DOM', 'Eventos', 'Arrays', 'ES6+'], 'Painel de tarefas interativo', 'Crie um painel com inclusão, edição, filtros, contadores e persistência local.'),
        moduleData('APIs e Assincronismo', 8, 'Consuma serviços REST com fetch, async/await e tratamento de falhas.', ['Fetch', 'Promises', 'REST', 'JSON'], 'Buscador resiliente de dados', 'Integre uma API pública com loading, estado vazio, cache local e mensagens de erro úteis.'),
        moduleData('Componentização e Estado', 8, 'Divida a experiência em componentes e organize o fluxo de dados.', ['Componentes', 'Estado', 'Eventos', 'Reutilização'], 'Catálogo modular', 'Modele um catálogo com componentes reutilizáveis, filtros combinados e estado previsível.')
      ]},
      avancado: { title: 'Arquitetura Front-End', description: 'Aplicações escaláveis com qualidade, desempenho, testes e entrega contínua.', modules: [
        moduleData('React e Arquitetura', 12, 'Estruture domínios, rotas e componentes com separação de responsabilidades.', ['React', 'Rotas', 'Hooks', 'Arquitetura'], 'Portal React escalável', 'Projete um portal com três domínios, rotas protegidas e camada de serviços desacoplada.'),
        moduleData('Estado e Performance', 10, 'Otimize renderizações e organize estados locais, globais e remotos.', ['Context', 'Memoização', 'Cache', 'Performance'], 'Dashboard de alta performance', 'Implemente um dashboard filtrável, mensure gargalos e documente as otimizações realizadas.'),
        moduleData('Testes e Deploy', 10, 'Garanta confiabilidade com testes, automação e publicação controlada.', ['Testes', 'CI/CD', 'Observabilidade', 'Deploy'], 'Pipeline de qualidade', 'Crie testes unitários e de integração, automatize validações e publique uma versão rastreável.')
      ]}
    }
  },
  backend: {
    label: 'Back-End', icon: '{ }', description: 'Serviços, APIs, bancos de dados e arquiteturas confiáveis.',
    levels: {
      iniciante: { title: 'Fundamentos de Back-End', description: 'Lógica de servidor, HTTP e persistência para os primeiros serviços.', modules: [
        moduleData('Node.js e Módulos', 7, 'Execute JavaScript no servidor e organize responsabilidades em módulos.', ['Node.js', 'Módulos', 'NPM', 'Erros'], 'CLI de gestão de atividades', 'Crie uma ferramenta de terminal para cadastrar, listar, concluir e salvar atividades em JSON.'),
        moduleData('HTTP e APIs REST', 7, 'Entenda requisições, respostas, rotas e códigos de status.', ['HTTP', 'Rotas', 'REST', 'Status'], 'API de chamados', 'Implemente uma API de chamados com operações CRUD e respostas HTTP consistentes.'),
        moduleData('Dados com SQL', 8, 'Modele tabelas, relacionamentos e consultas essenciais.', ['SQL', 'Modelagem', 'CRUD', 'Chaves'], 'Banco de dados de projetos', 'Modele projetos, responsáveis, marcos e riscos com chaves e consultas de acompanhamento.')
      ]},
      intermediario: { title: 'APIs e Segurança', description: 'Serviços robustos com autenticação, validação e testes automatizados.', modules: [
        moduleData('APIs Modulares', 10, 'Separe controladores, serviços e acesso a dados.', ['Camadas', 'Validação', 'Middlewares', 'Logs'], 'API modular de indicadores', 'Crie uma API que registre KPIs, valide metas e calcule desvios por período.'),
        moduleData('Autenticação e Autorização', 9, 'Proteja recursos com identidade, permissões e práticas seguras.', ['JWT', 'Papéis', 'Hash', 'Segurança'], 'Controle de acesso por perfil', 'Implemente login e permissões distintas para analista, gestor e administrador.'),
        moduleData('Testes de API', 8, 'Automatize cenários críticos e valide contratos de integração.', ['Unitários', 'Integração', 'Mocks', 'Contratos'], 'Suíte de regressão', 'Crie testes para sucesso, validação, autorização e falhas de uma API de projetos.')
      ]},
      avancado: { title: 'Arquitetura e Operação', description: 'Escalabilidade, desempenho, observabilidade e entrega segura.', modules: [
        moduleData('Arquitetura de Serviços', 12, 'Modele limites de domínio, eventos e dependências entre serviços.', ['Domínios', 'Eventos', 'Filas', 'Resiliência'], 'Ecossistema orientado a eventos', 'Projete três serviços integrados por eventos, com idempotência e tratamento de indisponibilidade.'),
        moduleData('Cache e Performance', 10, 'Reduza latência e custo com estratégias de cache e paginação.', ['Cache', 'Índices', 'Paginação', 'Profiling'], 'Otimização orientada a métricas', 'Meça uma consulta crítica, aplique duas otimizações e compare os resultados obtidos.'),
        moduleData('Observabilidade e CI/CD', 10, 'Monitore serviços e automatize entregas com segurança.', ['Logs', 'Métricas', 'Tracing', 'Pipeline'], 'Operação confiável', 'Defina SLI/SLO, alertas e um pipeline com validação, rollback e evidências de implantação.')
      ]}
    }
  },
  ia: {
    label: 'Inteligência Artificial', icon: 'AI', description: 'Dados, modelos e agentes de IA aplicados com qualidade e responsabilidade.',
    levels: {
      iniciante: { title: 'Fundamentos de IA Aplicada', description: 'Conceitos essenciais, prompts claros e uso responsável de modelos.', modules: [
        moduleData('Fundamentos de IA', 6, 'Diferencie automação, machine learning, IA generativa e agentes.', ['Conceitos', 'Casos de uso', 'Limitações', 'Ética'], 'Mapa de oportunidades de IA', 'Analise um processo real, identifique três oportunidades e registre riscos e critérios de sucesso.'),
        moduleData('Engenharia de Prompt', 7, 'Estruture contexto, tarefa, restrições e formato de saída.', ['Contexto', 'Few-shot', 'Restrições', 'Avaliação'], 'Biblioteca de prompts testada', 'Crie e compare cinco prompts para extração, classificação e resumo de informações.'),
        moduleData('IA Responsável', 5, 'Avalie privacidade, vieses, transparência e supervisão humana.', ['Privacidade', 'Viés', 'Transparência', 'Humano no ciclo'], 'Checklist de uso responsável', 'Elabore uma avaliação de risco para um assistente de IA usado em decisões de negócio.')
      ]},
      intermediario: { title: 'Dados, RAG e Agentes', description: 'Soluções conectadas a conhecimento, ferramentas e fluxos de trabalho.', modules: [
        moduleData('Preparação de Dados', 9, 'Organize, limpe e documente dados para aplicações de IA.', ['Qualidade', 'Metadados', 'Chunking', 'Governança'], 'Base de conhecimento auditável', 'Prepare documentos fictícios, defina metadados e registre regras de qualidade e atualização.'),
        moduleData('RAG e Recuperação', 10, 'Conecte modelos a fontes verificáveis e avalie relevância das respostas.', ['Embeddings', 'Busca', 'Contexto', 'Citações'], 'Assistente com fontes', 'Projete um fluxo RAG que responda perguntas e apresente a origem de cada informação utilizada.'),
        moduleData('Agentes e Ferramentas', 10, 'Orquestre decisões, ferramentas e critérios de parada.', ['Agentes', 'Tools', 'MCP', 'Guardrails'], 'Agente de acompanhamento', 'Crie um agente que consulte indicadores, detecte desvios e proponha um plano de ação para validação humana.')
      ]},
      avancado: { title: 'Engenharia de Agentes', description: 'Arquiteturas multiagente, avaliação contínua e governança empresarial.', modules: [
        moduleData('Arquitetura Multiagente', 12, 'Distribua papéis e coordene colaboração entre agentes especializados.', ['Orquestração', 'Memória', 'Delegação', 'Conflitos'], 'PMO multiagente', 'Modele agentes de riscos, prazos e indicadores coordenados por um orquestrador com regras de escalonamento.'),
        moduleData('Avaliação e Observabilidade', 10, 'Meça qualidade, custo, latência e segurança das respostas.', ['Evals', 'Tracing', 'Custo', 'Red teaming'], 'Painel de qualidade de IA', 'Defina um conjunto de avaliações, métricas e alertas para acompanhar uma aplicação generativa.'),
        moduleData('MLOps e Governança', 12, 'Controle versões, dados, aprovações e implantação de modelos.', ['MLOps', 'Versionamento', 'Riscos', 'Compliance'], 'Ciclo de vida governado', 'Desenhe um fluxo de aprovação, monitoramento e reversão para uma solução de IA empresarial.')
      ]}
    }
  },
  mobile: {
    label: 'Mobile', icon: '▯', description: 'Aplicações móveis centradas no usuário, conectadas e preparadas para publicação.',
    levels: {
      iniciante: { title: 'Fundamentos Mobile', description: 'Interfaces, navegação e dados locais para aplicativos simples.', modules: [
        moduleData('Interface e Componentes', 7, 'Construa telas reutilizáveis com hierarquia e acessibilidade.', ['Componentes', 'Layout', 'Acessibilidade', 'Tema'], 'Aplicativo de hábitos', 'Crie três telas para registrar hábitos, acompanhar o dia e visualizar uma sequência semanal.'),
        moduleData('Navegação e Estado', 7, 'Organize fluxos entre telas e preserve dados da sessão.', ['Rotas', 'Parâmetros', 'Estado', 'Formulários'], 'Fluxo de cadastro guiado', 'Implemente cadastro em etapas com validação, retorno e resumo antes da confirmação.'),
        moduleData('Persistência Local', 6, 'Armazene preferências e registros com segurança no dispositivo.', ['Storage', 'JSON', 'Preferências', 'Offline'], 'Lista offline', 'Crie uma lista que funcione sem conexão e restaure os dados ao reabrir o aplicativo.')
      ]},
      intermediario: { title: 'Aplicativos Conectados', description: 'APIs, autenticação, sincronização e recursos do dispositivo.', modules: [
        moduleData('APIs e Autenticação', 9, 'Consuma serviços e proteja sessões do usuário.', ['HTTP', 'Token', 'Sessão', 'Erros'], 'Área autenticada', 'Crie login, renovação de sessão e uma tela de dados com tratamento de expiração.'),
        moduleData('Offline First e Sincronização', 10, 'Mantenha o app útil sem internet e trate conflitos de dados.', ['Cache', 'Fila', 'Sincronização', 'Conflitos'], 'Inspeção de campo offline', 'Registre itens, fotos simuladas e observações offline, sincronizando quando a conexão retornar.'),
        moduleData('Recursos e Testes Mobile', 8, 'Integre capacidades do dispositivo e valide fluxos críticos.', ['Câmera', 'Localização', 'Permissões', 'Testes'], 'Registro georreferenciado', 'Implemente captura simulada de localização com permissões, fallback e testes do fluxo principal.')
      ]},
      avancado: { title: 'Arquitetura Mobile', description: 'Qualidade, desempenho, segurança e ciclo completo de publicação.', modules: [
        moduleData('Arquitetura e Performance', 11, 'Separe domínios e otimize inicialização, listas e memória.', ['Arquitetura', 'Profiling', 'Memória', 'Renderização'], 'Aplicativo modular de operações', 'Projete módulos independentes, meça o tempo inicial e otimize uma lista de grande volume.'),
        moduleData('Segurança e Publicação', 10, 'Proteja dados e prepare versões rastreáveis para as lojas.', ['Secrets', 'Criptografia', 'Build', 'Release'], 'Pipeline de publicação segura', 'Defina assinatura, ambientes, validações, versionamento e checklist de lançamento.'),
        moduleData('Observabilidade e Experimentação', 9, 'Acompanhe estabilidade e valide melhorias com dados.', ['Crashes', 'Analytics', 'Feature flags', 'Experimentos'], 'Evolução orientada a métricas', 'Defina eventos, indicadores e um experimento controlado para melhorar a conclusão de uma jornada.')
      ]}
    }
  }
};

const levels = {
  iniciante: { label: 'Iniciante', points: 100, deliverables: ['Código funcional e organizado', 'README com instruções de execução', 'Evidências de três testes manuais'], criteria: ['Fluxo principal concluído', 'Interface ou saída compreensível', 'Sem erro bloqueante'] },
  intermediario: { label: 'Intermediário', points: 200, deliverables: ['Arquitetura modular', 'Tratamento de erros e estados alternativos', 'Testes automatizados do fluxo crítico', 'Documentação técnica'], criteria: ['Regras de negócio validadas', 'Falhas tratadas com clareza', 'Código reutilizável e versionado'] },
  avancado: { label: 'Avançado', points: 300, deliverables: ['Arquitetura escalável documentada', 'Testes unitários e de integração', 'Métricas de qualidade ou desempenho', 'Pipeline ou plano de implantação'], criteria: ['Decisões técnicas justificadas', 'Riscos e dependências registrados', 'Entrega observável, segura e reproduzível'] }
};

const areaOrder = ['frontend', 'backend', 'ia', 'mobile'];
const levelOrder = ['iniciante', 'intermediario', 'avancado'];
const storageKey = 'geoExplorerV2';
let downloadUrl = null;
let toastTimer = null;

function loadState() {
  const initial = { area: 'frontend', level: 'iniciante', selectedModule: 0, completedModules: [], completedChallenges: [], name: 'Estudante' };
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return { ...initial, ...saved, completedModules: saved?.completedModules || [], completedChallenges: saved?.completedChallenges || [] };
  } catch { return initial; }
}

const state = loadState();
const elements = {
  areaControl: document.getElementById('area-control'), levelControl: document.getElementById('level-control'), areaIcon: document.getElementById('area-icon'),
  trackLabel: document.getElementById('track-label'), trackTitle: document.getElementById('track-title'), trackDescription: document.getElementById('track-description'),
  statModules: document.getElementById('stat-modules'), statHours: document.getElementById('stat-hours'), statProgress: document.getElementById('stat-progress'), statScore: document.getElementById('stat-score'), statChallenges: document.getElementById('stat-challenges'),
  moduleList: document.getElementById('module-list'), moduleDetail: document.getElementById('module-detail'), challengeCard: document.getElementById('challenge-card'),
  challengeButton: document.getElementById('generate-challenge'), resetButton: document.getElementById('reset-progress'), progressRing: document.getElementById('progress-ring'), overallProgress: document.getElementById('overall-progress'), areaProgress: document.getElementById('area-progress'), achievementList: document.getElementById('achievement-list'),
  nameInput: document.getElementById('participant-name'), rankingList: document.getElementById('ranking-list'), certificateButton: document.getElementById('generate-certificate'), certificateResult: document.getElementById('certificate-result'), toast: document.getElementById('toast')
};

function saveState() { localStorage.setItem(storageKey, JSON.stringify(state)); }
function currentTrack() { return catalog[state.area].levels[state.level]; }
function currentModule() { return currentTrack().modules[state.selectedModule]; }
function moduleKey(area = state.area, level = state.level, index = state.selectedModule) { return `${area}:${level}:${index}`; }
function hasModule(key) { return state.completedModules.includes(key); }
function hasChallenge(key) { return state.completedChallenges.some(item => item.key === key); }
function totalScore() { return state.completedChallenges.reduce((sum, item) => sum + item.points, 0); }
function trackCompletion(area = state.area, level = state.level) {
  const modules = catalog[area].levels[level].modules;
  const done = modules.filter((_, index) => hasModule(moduleKey(area, level, index))).length;
  return { done, total: modules.length, percent: Math.round((done / modules.length) * 100) };
}
function areaCompletion(area) {
  let done = 0; let total = 0;
  levelOrder.forEach(level => { const progress = trackCompletion(area, level); done += progress.done; total += progress.total; });
  return Math.round((done / total) * 100);
}
function overallCompletion() {
  const values = areaOrder.map(areaCompletion);
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}
function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => elements.toast.classList.remove('is-visible'), 2300);
}

function renderControls() {
  elements.areaControl.replaceChildren();
  areaOrder.forEach(areaKey => {
    const area = catalog[areaKey];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `choice-button${state.area === areaKey ? ' is-active' : ''}`;
    button.setAttribute('aria-pressed', String(state.area === areaKey));
    button.innerHTML = `<span class="choice-icon">${area.icon.replace('<', '&lt;')}</span><span>${area.label}</span>`;
    button.addEventListener('click', () => { state.area = areaKey; state.selectedModule = 0; saveState(); renderAll(); });
    elements.areaControl.append(button);
  });
  elements.levelControl.replaceChildren();
  levelOrder.forEach(levelKey => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `choice-button${state.level === levelKey ? ' is-active' : ''}`;
    button.setAttribute('aria-pressed', String(state.level === levelKey));
    button.textContent = levels[levelKey].label;
    button.addEventListener('click', () => { state.level = levelKey; state.selectedModule = 0; saveState(); renderAll(); });
    elements.levelControl.append(button);
  });
}

function renderOverview() {
  const area = catalog[state.area];
  const track = currentTrack();
  const progress = trackCompletion();
  elements.areaIcon.textContent = area.icon;
  elements.trackLabel.textContent = `${area.label.toUpperCase()} · ${levels[state.level].label.toUpperCase()}`;
  elements.trackTitle.textContent = track.title;
  elements.trackDescription.textContent = track.description;
  elements.statModules.textContent = track.modules.length;
  elements.statHours.textContent = `${track.modules.reduce((sum, module) => sum + module.hours, 0)}h`;
  elements.statProgress.textContent = `${progress.percent}%`;
  elements.statScore.textContent = totalScore();
  elements.statChallenges.textContent = state.completedChallenges.length;
}

function renderModules() {
  elements.moduleList.replaceChildren();
  currentTrack().modules.forEach((module, index) => {
    const key = moduleKey(state.area, state.level, index);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `module-button${index === state.selectedModule ? ' is-active' : ''}${hasModule(key) ? ' is-complete' : ''}`;
    button.setAttribute('role', 'listitem');
    button.setAttribute('aria-pressed', String(index === state.selectedModule));
    const indexEl = document.createElement('span'); indexEl.className = 'module-index'; indexEl.textContent = hasModule(key) ? '✓' : String(index + 1).padStart(2, '0');
    const titleEl = document.createElement('span'); titleEl.className = 'module-title'; titleEl.textContent = module.title;
    const hoursEl = document.createElement('span'); hoursEl.className = 'module-hours'; hoursEl.textContent = `${module.hours}h`;
    button.append(indexEl, titleEl, hoursEl);
    button.addEventListener('click', () => { state.selectedModule = index; saveState(); renderModules(); renderModuleDetail(); renderChallengePlaceholder(); });
    elements.moduleList.append(button);
  });
}

function renderModuleDetail() {
  const module = currentModule();
  const key = moduleKey();
  elements.moduleDetail.replaceChildren();
  const label = document.createElement('p'); label.className = 'micro-label'; label.textContent = `${module.hours} HORAS · MÓDULO ${String(state.selectedModule + 1).padStart(2, '0')}`;
  const title = document.createElement('h3'); title.textContent = module.title;
  const description = document.createElement('p'); description.textContent = module.description;
  const topics = document.createElement('div'); topics.className = 'topic-list';
  module.topics.forEach(text => { const topic = document.createElement('span'); topic.className = 'topic'; topic.textContent = text; topics.append(topic); });
  const action = document.createElement('div'); action.className = 'module-action';
  const status = document.createElement('span'); status.className = 'module-status'; status.textContent = hasModule(key) ? 'Módulo registrado como concluído.' : 'Conclua o conteúdo e registre seu avanço.';
  const button = document.createElement('button'); button.type = 'button'; button.className = `small-button${hasModule(key) ? ' is-complete' : ''}`; button.textContent = hasModule(key) ? 'Concluído ✓' : 'Marcar como concluído';
  button.addEventListener('click', () => {
    if (hasModule(key)) state.completedModules = state.completedModules.filter(item => item !== key);
    else state.completedModules.push(key);
    saveState(); renderModules(); renderModuleDetail(); renderOverview(); renderDashboard(); showToast(hasModule(key) ? 'Progresso atualizado.' : 'Conclusão removida.');
  });
  action.append(status, button);
  elements.moduleDetail.append(label, title, description, topics, action);
}

function renderChallengePlaceholder() {
  elements.challengeCard.innerHTML = '<p class="micro-label">MISSÃO DISPONÍVEL</p><h3>Gere um desafio para o módulo selecionado.</h3><p>A complexidade e a pontuação acompanham o nível da trilha.</p>';
}

function renderChallenge() {
  const module = currentModule();
  const level = levels[state.level];
  const key = moduleKey();
  const complete = hasChallenge(key);
  elements.challengeCard.replaceChildren();
  const label = document.createElement('p'); label.className = 'micro-label'; label.textContent = `${catalog[state.area].label.toUpperCase()} · ${level.label.toUpperCase()}`;
  const title = document.createElement('h3'); title.textContent = module.challenge;
  const brief = document.createElement('p'); brief.textContent = module.brief;
  const meta = document.createElement('div'); meta.className = 'challenge-meta'; meta.innerHTML = `<span>${level.points} pontos</span><span>${module.hours}h de referência</span><span>${level.deliverables.length} entregáveis</span>`;
  const deliverables = document.createElement('div'); deliverables.className = 'challenge-section'; deliverables.innerHTML = '<strong>Entregáveis</strong>';
  const deliverableList = document.createElement('ul'); level.deliverables.forEach(item => { const li = document.createElement('li'); li.textContent = item; deliverableList.append(li); }); deliverables.append(deliverableList);
  const criteria = document.createElement('div'); criteria.className = 'challenge-section'; criteria.innerHTML = '<strong>Critérios de aceite</strong>';
  const criteriaList = document.createElement('ul'); level.criteria.forEach(item => { const li = document.createElement('li'); li.textContent = item; criteriaList.append(li); }); criteria.append(criteriaList);
  const button = document.createElement('button'); button.type = 'button'; button.className = 'small-button challenge-complete'; button.disabled = complete; button.textContent = complete ? 'Desafio concluído ✓' : `Concluir desafio · +${level.points} pontos`;
  button.addEventListener('click', () => { state.completedChallenges.push({ key, points: level.points, completedAt: new Date().toISOString() }); if (!hasModule(key)) state.completedModules.push(key); saveState(); renderChallenge(); renderModules(); renderModuleDetail(); renderOverview(); renderDashboard(); renderRanking(); showToast(`Desafio concluído: +${level.points} pontos!`); });
  elements.challengeCard.append(label, title, brief, meta, deliverables, criteria, button);
}

function renderDashboard() {
  const overall = overallCompletion();
  elements.progressRing.style.setProperty('--progress', overall);
  elements.overallProgress.textContent = `${overall}%`;
  elements.areaProgress.replaceChildren();
  areaOrder.forEach(areaKey => {
    const percent = areaCompletion(areaKey);
    const row = document.createElement('div'); row.className = 'progress-row';
    row.innerHTML = `<span>${catalog[areaKey].label}</span><div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div><strong>${percent}%</strong>`;
    elements.areaProgress.append(row);
  });
  const completedAreas = areaOrder.filter(area => areaCompletion(area) > 0).length;
  const achievements = [
    { label: 'Primeiro passo', earned: state.completedModules.length >= 1 },
    { label: 'Explorador 25%', earned: overall >= 25 },
    { label: 'Desafiante 500', earned: totalScore() >= 500 },
    { label: 'Multitrilha', earned: completedAreas >= 2 },
    { label: 'Jornada completa', earned: overall === 100 }
  ];
  elements.achievementList.replaceChildren();
  achievements.forEach(item => { const badge = document.createElement('span'); badge.className = `achievement${item.earned ? ' is-earned' : ''}`; badge.textContent = `${item.earned ? '✓ ' : '○ '}${item.label}`; elements.achievementList.append(badge); });
}

function renderRanking() {
  const demos = [
    { name: 'Marina · demo', score: 1650 },
    { name: 'Carlos · demo', score: 1280 },
    { name: 'Joana · demo', score: 920 },
    { name: 'Rafael · demo', score: 620 }
  ];
  const name = state.name.trim() || 'Estudante';
  const entries = [...demos, { name: `${name} · você`, score: totalScore(), user: true }].sort((a, b) => b.score - a.score);
  elements.rankingList.replaceChildren();
  entries.forEach(entry => {
    const item = document.createElement('li'); item.className = `ranking-item${entry.user ? ' is-user' : ''}`;
    const nameEl = document.createElement('span'); nameEl.className = 'ranking-name'; nameEl.textContent = entry.name;
    const scoreEl = document.createElement('span'); scoreEl.className = 'ranking-score'; scoreEl.textContent = `${entry.score} pts`;
    item.append(nameEl, scoreEl); elements.rankingList.append(item);
  });
}

function latin1Bytes(text) { const bytes = new Uint8Array(text.length); for (let i = 0; i < text.length; i += 1) bytes[i] = text.charCodeAt(i) & 255; return bytes; }
function pdfText(text) { return String(text).replace(/[–—]/g, '-').replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)'); }
function buildCertificatePdf(name) {
  const area = catalog[state.area]; const track = currentTrack(); const progress = trackCompletion(); const score = totalScore();
  const hours = track.modules.reduce((sum, module) => sum + module.hours, 0);
  const date = new Intl.DateTimeFormat('pt-BR').format(new Date());
  const content = [
    'q', '0.027 0.067 0.122 rg', '0 0 842 595 re f', '0.302 0.890 0.635 RG', '3 w', '42 42 758 511 re S',
    'BT /F2 14 Tf 0.302 0.890 0.635 rg 1 0 0 1 326 520 Tm (GEO-EXPLORER V2) Tj ET',
    'BT /F2 28 Tf 0.933 0.961 1 rg 1 0 0 1 180 455 Tm (CERTIFICADO DEMONSTRATIVO) Tj ET',
    'BT /F1 14 Tf 0.624 0.694 0.784 rg 1 0 0 1 237 415 Tm (Documento educacional, ficticio e sem validade oficial.) Tj ET',
    `BT /F1 16 Tf 0.933 0.961 1 rg 1 0 0 1 338 355 Tm (Certificamos que) Tj ET`,
    `BT /F2 27 Tf 0.427 0.659 1 rg 1 0 0 1 120 305 Tm (${pdfText(name.toUpperCase())}) Tj ET`,
    `BT /F1 16 Tf 0.933 0.961 1 rg 1 0 0 1 150 255 Tm (explorou a trilha ${pdfText(track.title)}.) Tj ET`,
    `BT /F2 15 Tf 0.302 0.890 0.635 rg 1 0 0 1 160 205 Tm (${pdfText(area.label)} | ${pdfText(levels[state.level].label)} | ${hours} horas | Progresso ${progress.percent}% | ${score} pontos) Tj ET`,
    `BT /F1 12 Tf 0.624 0.694 0.784 rg 1 0 0 1 270 145 Tm (Gerado em ${date} por Geo-Explorer.) Tj ET`,
    '0.302 0.890 0.635 rg', '296 78 250 34 re f', 'BT /F2 11 Tf 0.020 0.129 0.090 rg 1 0 0 1 334 91 Tm (DEMONSTRACAO FICTICIA) Tj ET', 'Q'
  ].join('\n');
  const objects = [null,
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 842 595] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>',
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`
  ];
  let pdf = '%PDF-1.4\n'; const offsets = [0];
  for (let i = 1; i < objects.length; i += 1) { offsets[i] = pdf.length; pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`; }
  const xref = pdf.length; pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let i = 1; i < objects.length; i += 1) pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new Blob([latin1Bytes(pdf)], { type: 'application/pdf' });
}

function renderCertificateResult() {
  const track = currentTrack(); const progress = trackCompletion();
  elements.certificateResult.classList.add('is-ready');
  elements.certificateResult.replaceChildren();
  const icon = document.createElement('span'); icon.textContent = 'PDF';
  const content = document.createElement('div');
  const text = document.createElement('p'); text.innerHTML = `<strong>${state.name || 'Estudante'}</strong><br>${catalog[state.area].label} · ${track.title}<br>Progresso ${progress.percent}% · ${totalScore()} pontos`;
  const link = document.createElement('a'); link.className = 'download-link'; link.href = downloadUrl; link.download = `certificado-demonstrativo-geo-explorer-${state.area}-${state.level}.pdf`; link.textContent = 'Baixar PDF fictício';
  content.append(text, link); elements.certificateResult.append(icon, content);
}

elements.challengeButton.addEventListener('click', renderChallenge);
elements.nameInput.value = state.name;
elements.nameInput.addEventListener('input', event => { state.name = event.target.value.slice(0, 45); saveState(); renderRanking(); });
elements.certificateButton.addEventListener('click', () => {
  const name = state.name.trim() || 'Estudante';
  if (downloadUrl) URL.revokeObjectURL(downloadUrl);
  downloadUrl = URL.createObjectURL(buildCertificatePdf(name));
  renderCertificateResult(); showToast('Certificado demonstrativo em PDF gerado.');
});
elements.resetButton.addEventListener('click', () => {
  if (!window.confirm('Deseja apagar o progresso e a pontuação salvos neste navegador?')) return;
  state.completedModules = []; state.completedChallenges = []; saveState(); renderAll(); showToast('Progresso reiniciado.');
});

function renderAll() {
  renderControls(); renderOverview(); renderModules(); renderModuleDetail(); renderChallengePlaceholder(); renderDashboard(); renderRanking();
}

renderAll();
