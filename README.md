# 🌍 Geo-Explorer V2 — Plataforma Multitrilha

Aplicação desenvolvida a partir do desafio **“Construindo seu Primeiro Produto com um Agente de IA”**, do bootcamp **IBM Bob: IA de Nível Empresarial para Desenvolvedores e Tech Leaders**, promovido pela DIO.

Na V2, o projeto evoluiu de uma trilha Front-End para uma plataforma educacional multitrilha, com dashboard, desafios estruturados, progresso persistente, gamificação e certificado demonstrativo em PDF.

## 🚀 Aplicação publicada

**Acesse a demonstração:**  
https://geo-explorer-ibm-bob.elis23-eng.chatgpt.site

> A URL pública funciona sem instalar programas. O endereço `localhost` é utilizado somente durante a execução local.

## ✨ Funcionalidades da V2

- Quatro áreas de aprendizagem: Front-End, Back-End, Inteligência Artificial e Mobile
- Três níveis por área: Iniciante, Intermediário e Avançado
- 12 trilhas e 36 módulos com carga horária, objetivos e tópicos
- Desafios por nível com contexto, entregáveis e critérios de aceite
- Marcação de módulos e desafios concluídos
- Progresso salvo no próprio navegador com `localStorage`
- Pontuação, conquistas e ranking demonstrativo
- Dashboard visual com evolução geral e por área
- Geração e download de certificado fictício em PDF
- Interface responsiva e acessível para computador e celular
- Versão de linha de comando em Node.js
- Servidor MCP para integração com agentes de IA
- Testes automatizados dos comandos principais

## 🧠 Competências aplicadas

- IBM Bob e desenvolvimento assistido por agentes de IA
- JavaScript, Node.js, HTML5 e CSS3
- JSON, modelagem e organização de dados
- Regras de negócio, gerenciamento de estado e `localStorage`
- Gamificação e visualização de indicadores
- Geração de documentos PDF no navegador
- Git, GitHub e documentação técnica
- Model Context Protocol (MCP)
- Testes e princípios de DevOps

## 🏗️ Arquitetura do projeto

```text
Frontend-Geo-Explorer-DIO/
├── commands/          # Regras dos comandos de terminal
├── data/              # Base JSON das trilhas originais
├── public/            # Plataforma web Geo-Explorer V2
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

## 🧭 Áreas disponíveis na plataforma web

| Área | Direcionamento |
|---|---|
| Front-End | Interfaces, JavaScript e aplicações web modernas |
| Back-End | APIs, banco de dados, arquitetura e segurança |
| Inteligência Artificial | Fundamentos, agentes, RAG, avaliação e governança |
| Mobile | Interfaces, integração nativa, arquitetura e publicação |

Cada área possui três níveis e nove módulos, totalizando **36 módulos** na experiência web.

## 🔐 Transparência dos dados

As trilhas, os desafios, os nomes, o ranking e os certificados utilizados na demonstração são **fictícios e exclusivamente educacionais**. O certificado gerado pela aplicação não representa certificação oficial da DIO, IBM ou de qualquer outra instituição. O nome e o progresso informados ficam armazenados somente no navegador do usuário.

## 🔍 Aprendizados do projeto

- Transformar requisitos em funcionalidades testáveis
- Evoluir um protótipo para uma experiência de produto mais completa
- Modelar conteúdo para múltiplas áreas e níveis
- Criar indicadores de progresso e mecânicas de gamificação
- Gerar PDF diretamente no navegador, sem dependências externas
- Usar IA como aceleradora, mantendo validação humana
- Integrar dados, interface, testes e documentação
- Preparar uma aplicação para demonstração pública

## 👩‍💻 Autora

**Elisângela Alves Vieira**  
Engenharia · Processos · Projetos · Dados e IA aplicada

- [LinkedIn](https://www.linkedin.com/in/elisangelavieira-engcivil/)
- [GitHub](https://github.com/elis23eng-glitch)
- [Portfólio profissional](https://elisangela-vieira-engenharia.elis23-eng.chatgpt.site/)

---

Desenvolvido como projeto educacional para consolidar conhecimentos em agentes de IA, desenvolvimento, Git, MCP, DevOps e evolução de produtos digitais.
