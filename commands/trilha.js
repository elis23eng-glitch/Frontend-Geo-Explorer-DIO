const fs = require('fs');
const path = require('path');

function carregarTrilhas() {
  const caminho = path.join(__dirname, '..', 'data', 'trilhas.json');
  const conteudo = fs.readFileSync(caminho, 'utf-8');
  return JSON.parse(conteudo);
}

function buscarTrilha(nivel) {
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

  console.log(`\n🗺️  Tecnologia : ${dados.tecnologia}`);
  console.log(`📊  Nível      : ${trilha.nivel}`);
  console.log(`📚  Trilha     : ${trilha.titulo}`);
  console.log(`📝  Descrição  : ${trilha.descricao}\n`);
  console.log(`── Módulos ──────────────────────────────────────`);

  trilha.modulos.forEach((mod, i) => {
    console.log(`\n  ${i + 1}. ${mod.titulo} (${mod.carga_horaria})`);
    console.log(`     ${mod.descricao}`);
    console.log(`     Tópicos: ${mod.topicos.join(' · ')}`);
  });

  console.log(`\n─────────────────────────────────────────────────\n`);
}

// Uso: node commands/trilha.js <nivel>
// Exemplo: node commands/trilha.js iniciante
const nivel = process.argv[2] || 'iniciante';
buscarTrilha(nivel);
