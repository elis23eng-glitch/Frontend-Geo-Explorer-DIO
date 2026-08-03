# 🌍 Geo-Explorer — DIO + IBM Bob

Projeto Geo-Explorer desenvolvido para o desafio “Construindo seu Primeiro Produto com um Agente de IA” da DIO. Este repositório contém a implementação Front-End do sistema de exploração [...]

## 📘 O que é o Geo-Explorer

O Geo-Explorer é uma aplicação em Node.js criada para o desafio **“Construindo seu Primeiro Produto com um Agente de IA”** da DIO Global. Ele permite explorar trilhas de aprendizagem, gerar [...]

O projeto foi desenvolvido com foco em **Front-End**, simulando trilhas de estudo para níveis Iniciante, Intermediário e Avançado.

## 📚 Base de Trilhas (resumo)

O arquivo `data/trilhas.json` contém trilhas fictícias para **Front-End**, divididas em três níveis:

### 🔹 Iniciante
- HTML
- CSS
- JavaScript

*Fundamentos essenciais para iniciar no Front-End.*

### 🔹 Intermediário
- React
- Hooks
- APIs

*Construção de aplicações modernas com React, incluindo hooks e integração com APIs.*

### 🔹 Avançado
- Performance
- Arquitetura
- Testes

*Aprofundamento em técnicas avançadas de Front-End.*

---

## 🚀 Como executar o projeto

Instale as dependências:

```bash
npm install
```

Para rodar o projeto:

```bash
node index.js
```

Os comandos específicos são explicados na seção abaixo.

---

## 🛠 Comandos principais

O Geo-Explorer possui três comandos principais. Use-os no terminal após `node index.js`:

### 🔹 1. Trilha
Retorna os módulos da trilha escolhida.

```bash
node index.js trilha frontend iniciante
```

### 🔹 2. Desafio
Gera um desafio baseado no nível informado.

```bash
node index.js desafio frontend intermediario
```

### 🔹 3. Certificado
Gera um certificado fictício com nome e trilha.

```bash
node index.js certificado "Seu Nome" frontend avancado
```

---

## 🧪 Como executar os testes

Os testes foram criados usando Node.js puro, sem bibliotecas externas. Execute cada teste individualmente:

```bash
node test/trilha.test.js
node test/desafio.test.js
node test/certificado.test.js
```

Cada teste imprime no console o resultado esperado do comando correspondente.

---

## ✨ Melhorias realizadas no projeto

Durante o desenvolvimento, foram implementadas melhorias além do fluxo básico apresentado no desafio:

- Organização clara da estrutura do projeto
- Criação de um servidor MCP para integração externa
- Testes automatizados para cada comando
- Documentação mais completa
- Resumo visual das trilhas para melhorar a leitura
- Separação de responsabilidades em arquivos distintos
- README otimizado para pré-visualização no GitHub

Essas melhorias tornam o projeto mais profissional, escalável e fácil de entender.

---

## 🔍 O que aprendi durante o desafio

### ⭐ 1. A importância da organização
Estruturar o projeto em pastas claras facilita a evolução e a manutenção.

### ⭐ 2. Criar comandos simples e reutilizáveis
Dividir funcionalidades em módulos independentes deixa o código mais limpo.

### ⭐ 3. Testar é essencial
Mesmo testes simples ajudam a validar o funcionamento e evitar erros futuros.

### ⭐ 4. Documentar é comunicar
Um README bem escrito transforma um projeto comum em um projeto profissional.

### ⭐ 5. IA como parceira
A IA acelera o processo, mas exige instruções claras e revisão humana.

### ⭐ 6. Projetos práticos aceleram a transição de carreira
Construir algo real aumenta a confiança e fortalece o portfólio.

### ⭐ 7. Evoluir continuamente
Cada pequena melhoria torna o projeto mais robusto e mais próximo de aplicações reais.

## ✨ Possíveis evoluções

- Adicionar novas trilhas (Back-End, IA, Mobile)
- Criar desafios mais complexos
- Gerar certificados em PDF
- Adicionar interface web
- Criar ranking de desafios
- Adicionar sistema de progresso
- Criar dashboard visual

---

## 🔍 Insights para futuros profissionais — Geo Explorer DIO

O desenvolvimento do Geo-Explorer foi mais do que um exercício técnico: foi uma experiência prática sobre como construir tecnologia de forma incremental, organizada e orientada a propósito.

### ⭐ Dicas rápidas
- Comece simples, mas comece
- Organização é tão importante quanto código
- Testar é parte do desenvolvimento
- Documentar é comunicar
- IA como parceira, não substituta
- Projetos práticos aceleram a transição de carreira
- Evoluir é um processo contínuo

---

### 💬 Mensagem final

Este projeto representa o início de uma nova jornada profissional. Cada comando criado, cada teste executado e cada linha documentada reforça que **qualquer pessoa pode construir soluções reá[...] 

---

## 👩‍💻 Autora

**Elisangela Vieira**

Foco: Front-End → Full Stack → Engenharia de IA

> "O aprendizado é a única coisa que a mente nunca esgota, nunca teme e nunca se arrepende." — Leonardo da Vinci
