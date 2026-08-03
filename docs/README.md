# 📍 Geo Explorer — DIO Front-End Trail CLI

Projeto de linha de comando em Node.js que simula uma plataforma de trilhas de aprendizado para **Desenvolvedora Front-End**, inspirada nos cursos da [DIO - Digital Innovation One](https://web.dio.me).

---

## 📁 Estrutura do Projeto

```
Frontend-Geo-Explorer-DIO/
│
├── data/
│   └── trilhas.json        → Trilhas fictícias de Front-End (9 módulos)
│
├── commands/
│   ├── trilha.js           → Exibe módulos de uma trilha por nível
│   ├── desafio.js          → Gera desafio prático aleatório
│   └── certificado.js      → Emite certificado fictício de conclusão
│
├── tests/
│   ├── trilha.test.js      → Testes do comando trilha
│   ├── desafio.test.js     → Testes do comando desafio
│   └── certificado.test.js → Testes do comando certificado
│
├── docs/
│   ├── README.md           → Esta documentação
│   ├── estrutura.md        → Visão geral da estrutura
│   └── dados.md            → Formato dos arquivos JSON
│
├── mcp-server.js           → Servidor MCP com as 3 tools expostas
├── index.js                → Ponto de entrada principal
└── package.json            → Configuração do projeto Node.js
```

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org) v18 ou superior instalado

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/elis23eng-glitch/Frontend-Geo-Explorer-DIO.git

# 2. Entre na pasta
cd Frontend-Geo-Explorer-DIO

# 3. Instale as dependências (necessário apenas para o servidor MCP)
npm install
```

---

## 🛠️ Como usar cada comando

### 1. `trilha` — Exibe a trilha de aprendizado

Mostra os módulos, descrições e tópicos de uma trilha pelo nível escolhido.

**Sintaxe:**
```bash
node commands/trilha.js <nivel>
```

**Níveis disponíveis:** `iniciante` · `intermediario` · `avancado`

**Exemplo de entrada:**
```bash
node commands/trilha.js iniciante
```

**Exemplo de saída:**
```
🗺️  Tecnologia : Desenvolvedora Front-End
📊  Nível      : iniciante
📚  Trilha     : Fundamentos do Front-End
📝  Descrição  : Primeiros passos no desenvolvimento web: estrutura, estilo e lógica básica.

── Módulos ──────────────────────────────────────

  1. HTML5 - Estruturando a Web (6h)
     Aprenda a estruturar páginas web com HTML5, utilizando tags semânticas...
     Tópicos: Introdução ao HTML5 · Tags semânticas · Formulários e inputs · ...

  2. CSS3 - Estilizando a Web (8h)
     Domine o CSS3 para criar interfaces visuais atrativas e responsivas...
     Tópicos: Seletores e especificidade · Box model · Flexbox · Grid Layout · ...

  3. Git e GitHub - Versionando seu Código (4h)
     Entenda o controle de versão com Git e publique seus projetos...
     Tópicos: Configuração do Git · Comandos essenciais · Branches e merge · ...
```

---

### 2. `desafio` — Gera um desafio prático

Sorteia aleatoriamente um módulo e um enunciado de desafio prático para o nível informado.

**Sintaxe:**
```bash
node commands/desafio.js <nivel>
```

**Exemplo de entrada:**
```bash
node commands/desafio.js intermediario
```

**Exemplo de saída:**
```
🚀  Desafio Geo Explorer
────────────────────────────────────────────────
📊  Nível   : intermediario
📦  Módulo  : JavaScript Essencial

🎯  Desafio :
    "Implemente uma calculadora simples no DOM com as 4 operações básicas usando eventos JavaScript."
────────────────────────────────────────────────
```

> Cada execução pode sortear um módulo e desafio diferente — são **27 combinações** no total.

---

### 3. `certificado` — Emite certificado de conclusão

Gera um certificado fictício com nome da pessoa, trilha concluída, carga horária e data de emissão.

**Sintaxe:**
```bash
node commands/certificado.js "<nome>" <nivel>
```

**Exemplo de entrada:**
```bash
node commands/certificado.js "Elisangela Alves Vieira" avancado
```

**Exemplo de saída:**
```
╔══════════════════════════════════════════════════════════╗
║              🏅  CERTIFICADO DE CONCLUSÃO  🏅             ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║   Certificamos que                                       ║
║                                                          ║
║   👤  ELISANGELA ALVES VIEIRA                             ║
║                                                          ║
║   concluiu com êxito a trilha:                           ║
║                                                          ║
║   📚  React e Ecossistema Moderno                         ║
║   📊  Nível    : avancado                                 ║
║   ⏱️  Duração  : 30h                                      ║
║   📅  Data     : 03 de agosto de 2026                     ║
║   🏢  Emitido  : DIO - Digital Innovation One             ║
║                                                          ║
║   "O aprendizado é a única coisa que a mente nunca       ║
║    esgota, nunca teme e nunca se arrepende."             ║
║                                    — Leonardo da Vinci   ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

---

## 🧪 Rodando os testes

Testes automatizados escritos em Node.js puro (sem dependências externas).

```bash
# Todos os testes de uma vez
npm test

# Individualmente
npm run test:trilha
npm run test:desafio
npm run test:certificado
```

**Resultado esperado:**
```
📋  trilha.js      →  9/9  ✅
🎯  desafio.js     → 19/19 ✅
🏅  certificado.js → 11/11 ✅
```

---

## 🤖 Servidor MCP

O projeto expõe as 3 tools via protocolo MCP (Model Context Protocol), permitindo integração com IAs como o Bob da IBM.

```bash
# Iniciar o servidor MCP
npm run mcp
```

**Tools disponíveis:**

| Tool | Parâmetros | Descrição |
|---|---|---|
| `trilha` | `nivel` | Retorna JSON com módulos da trilha |
| `desafio` | `nivel` | Retorna JSON com desafio aleatório |
| `certificado` | `nome`, `nivel` | Retorna JSON do certificado |

---

## 📊 Trilhas disponíveis

| Nível | Trilha | Módulos | Carga Total |
|---|---|---|---|
| 🟢 iniciante | Fundamentos do Front-End | HTML5, CSS3, Git & GitHub | 18h |
| 🟡 intermediario | JavaScript e Interatividade | JS Essencial, JS Assíncrono, CSS Avançado | 24h |
| 🔴 avancado | React e Ecossistema Moderno | React Fundamentos, Hooks/Estado, APIs e Deploy | 30h |

---

## 👩‍💻 Autora

**Elisangela Alves Vieira**  
Projeto desenvolvido como parte da formação **Desenvolvedora Front-End** na [DIO](https://web.dio.me).
