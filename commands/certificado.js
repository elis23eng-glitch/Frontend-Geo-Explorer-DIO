const fs = require('fs');
const path = require('path');

function carregarTrilhas() {
  const caminho = path.join(__dirname, '..', 'data', 'trilhas.json');
  const conteudo = fs.readFileSync(caminho, 'utf-8');
  return JSON.parse(conteudo);
}

function gerarCertificado(nome, nivel) {
  const dados = carregarTrilhas();

  const nivelNormalizado = nivel.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const trilha = dados.trilhas.find(t =>
    t.nivel.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === nivelNormalizado
  );

  if (!trilha) {
    console.log(`\n❌ Trilha não encontrada para o nível: "${nivel}"`);
    console.log(`   Níveis disponíveis: iniciante, intermediario, avancado\n`);
    return;
  }

  const agora = new Date();
  const dataFormatada = agora.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const totalHoras = trilha.modulos.reduce((acc, mod) => {
    return acc + parseInt(mod.carga_horaria);
  }, 0);

  console.log(`
╔══════════════════════════════════════════════════════════╗
║              🏅  CERTIFICADO DE CONCLUSÃO  🏅             ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║   Certificamos que                                       ║
║                                                          ║
║   👤  ${nome.toUpperCase().padEnd(52)}║
║                                                          ║
║   concluiu com êxito a trilha:                           ║
║                                                          ║
║   📚  ${trilha.titulo.padEnd(52)}║
║   📊  Nível    : ${trilha.nivel.padEnd(42)}║
║   ⏱️  Duração  : ${String(totalHoras + 'h').padEnd(42)}║
║   📅  Data     : ${dataFormatada.padEnd(42)}║
║   🏢  Emitido  : ${'DIO - Digital Innovation One'.padEnd(42)}║
║                                                          ║
║   "O aprendizado é a única coisa que a mente nunca       ║
║    esgota, nunca teme e nunca se arrepende."             ║
║                                    — Leonardo da Vinci   ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
  `);
}

// Uso: node commands/certificado.js "<nome>" <nivel>
// Exemplo: node commands/certificado.js "Elisangela Alves Vieira" avancado
const nome  = process.argv[2] || 'Estudante';
const nivel = process.argv[3] || 'iniciante';
gerarCertificado(nome, nivel);
