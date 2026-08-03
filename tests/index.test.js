const { execSync } = require('child_process');
const path = require('path');

let passou = 0;
let falhou = 0;

function ok(descricao) {
  console.log(`  ✅ ${descricao}`);
  passou++;
}

function falha(descricao, motivo) {
  console.log(`  ❌ ${descricao}`);
  console.log(`     → ${motivo}`);
  falhou++;
}

function assert(condicao, descricao, motivo) {
  condicao ? ok(descricao) : falha(descricao, motivo || 'condição falsa');
}

function rodar(comando) {
  return execSync(comando, { cwd: path.join(__dirname, '..'), encoding: 'utf-8' });
}

console.log('\n📋  index.js');

try {
  const saida = rodar('node index.js trilha frontend iniciante');
  assert(saida.includes('Fundamentos do Front-End'), 'encaminha comando trilha para o módulo correto', 'saída da trilha não foi exibida');
  assert(saida.includes('HTML5'), 'exibe módulos da trilha', 'módulos da trilha ausentes');
} catch (e) {
  falha('comando trilha via index.js', e.message);
}

console.log(`\n  Resultado: ${passou} passou(ram) | ${falhou} falhou(aram)\n`);
if (falhou > 0) process.exit(1);
