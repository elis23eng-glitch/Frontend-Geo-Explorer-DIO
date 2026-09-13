# 🌍 Geo-Explorer — DIO + IBM Bob

Aplicação desenvolvida para o desafio **“Construindo seu Primeiro Produto com um Agente de IA”**, do bootcamp **IBM Bob: IA de Nível Empresarial para Desenvolvedores e Tech Leaders**, promovido pela DIO.

O Geo-Explorer transforma uma base estruturada de aprendizagem Front-End em uma experiência interativa: o usuário escolhe seu nível, consulta módulos, recebe desafios práticos e gera uma demonstração fictícia de certificado.

## 🚀 Aplicação publicada

**Acesse a demonstração:**  
https://geo-explorer-ibm-bob.elis23-eng.chatgpt.site

> O antigo endereço `localhost` funcionava apenas durante a execução local. A URL acima é pública e permanente.

## ✨ Funcionalidades

- Seleção entre os níveis Iniciante, Intermediário e Avançado
- Consulta de módulos, tópicos e carga horária
- Geração aleatória de desafios adequados ao nível
- Indicador de progresso durante a exploração
- Geração e download de certificado demonstrativo em SVG
- Interface responsiva para computador e celular
- Versão de linha de comando em Node.js
- Servidor MCP para integração com agentes de IA
- Testes automatizados dos comandos principais

## 🧠 Competências aplicadas

- IBM Bob e desenvolvimento assistido por agentes de IA
- Node.js e JavaScript
- HTML5 e CSS3 responsivo
- JSON e modelagem de dados
- Git e GitHub
- Model Context Protocol (MCP)
- Testes, documentação e organização modular
- Princípios de DevOps e publicação contínua

## 🏗️ Arquitetura do projeto

```text
Frontend-Geo-Explorer-DIO/
├── commands/          # Regras dos comandos de terminal
├── data/              # Base JSON das trilhas
├── public/            # Aplicação web
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── tests/             # Testes automatizados
├── index.js           # Interface de linha de comando
├── server.js          # Servidor local da aplicação web
├── mcp-server.js      # Servidor MCP
└── package.json
```

## 💻 Executar a aplicação web localmente

Pré-requisito: Node.js instalado.

```bash
npm install
npm start
```

Depois, acesse:

```text
http://localhost:3000
```

O endereço local funciona somente enquanto o comando `npm start` estiver ativo no terminal.

## ⌨️ Executar pela linha de comando

Consultar uma trilha:

```bash
node index.js trilha frontend iniciante
```

Gerar um desafio:

```bash
node index.js desafio frontend intermediario
```

Gerar os dados de um certificado fictício:

```bash
node index.js certificado "Seu Nome" frontend avancado
```

## 🤖 Executar o servidor MCP

```bash
npm run mcp
```

O servidor MCP expõe recursos do projeto para integração controlada com agentes e ferramentas compatíveis.

## 🧪 Executar os testes

```bash
npm test
```

Também é possível executar cada teste separadamente:

```bash
npm run test:trilha
npm run test:desafio
npm run test:certificado
```

## 📚 Trilhas disponíveis

### Iniciante — Fundamentos do Front-End

HTML5, CSS3, Git e GitHub.

### Intermediário — JavaScript e Interatividade

JavaScript, APIs, hooks, componentização, CSS avançado e animações.

### Avançado — React e Ecossistema Moderno

Componentes, estado, hooks, integração com APIs, rotas e deploy.

## 🔐 Transparência dos dados

As trilhas, os desafios, os nomes e os certificados utilizados na demonstração são **fictícios e exclusivamente educacionais**. O certificado gerado pela aplicação não representa uma certificação oficial da DIO ou da IBM.

## 🔍 Aprendizados do desafio

- Transformar requisitos em funcionalidades testáveis
- Organizar responsabilidades em módulos reutilizáveis
- Usar IA como aceleradora, mantendo validação humana
- Integrar dados, interface, testes e documentação
- Preparar uma aplicação para demonstração pública
- Comunicar decisões técnicas de maneira clara

## 👩‍💻 Autora

**Elisângela Alves Vieira**  
Engenharia · Processos · Projetos · Dados e IA aplicada

- [LinkedIn](https://www.linkedin.com/in/elisangelavieira-engcivil/)
- [GitHub](https://github.com/elis23eng-glitch)
- [Portfólio profissional](https://elisangela-vieira-engenharia.elis23-eng.chatgpt.site/)

---

Desenvolvido como projeto educacional para consolidar conhecimentos em agentes de IA, desenvolvimento, Git, MCP e DevOps.
