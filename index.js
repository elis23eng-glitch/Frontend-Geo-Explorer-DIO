#!/usr/bin/env node

const comando = process.argv[2];
const argumentos = process.argv.slice(3);

function mostrarAjuda() {
  console.log(`\n📘 Geo Explorer - Comandos disponíveis\n`);
  console.log('  node index.js trilha <tecnologia> <nivel>');
  console.log('  node index.js desafio <tecnologia> <nivel>');
  console.log('  node index.js certificado "Seu Nome" <tecnologia> <nivel>\n');
}

switch (comando) {
  case 'trilha': {
    const nivel = argumentos.at(-1) || 'iniciante';
    const { buscarTrilha } = require('./commands/trilha');
    buscarTrilha(nivel);
    break;
  }

  case 'desafio': {
    const nivel = argumentos.at(-1) || 'iniciante';
    const { gerarDesafio } = require('./commands/desafio');
    gerarDesafio(nivel);
    break;
  }

  case 'certificado': {
    const nivel = argumentos.at(-1) || 'iniciante';
    const nome = argumentos.slice(0, -1).join(' ') || 'Estudante';
    const { gerarCertificado } = require('./commands/certificado');
    gerarCertificado(nome, nivel);
    break;
  }

  default:
    mostrarAjuda();
    break;
}
