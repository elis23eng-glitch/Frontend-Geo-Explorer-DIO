const { execSync } = require('child_process');
const path = require('path');

// ─── utilitários ────────────────────────────────────────────────────────────

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

// ─── testes: trilha.js ───────────────────────────────────────────────────────

console.log('\n📋  trilha.js');

try {
  const saida = rodar('node commands/trilha.js iniciante');
  assert(saida.includes('Fundamentos do Front-End'),   'retorna título da trilha iniciante',  'título não encontrado na saída');
  assert(saida.includes('HTML5'),                       'contém módulo HTML5',                 'módulo HTML5 ausente');
  assert(saida.includes('CSS3'),                        'contém módulo CSS3',                  'módulo CSS3 ausente');
  assert(saida.includes('iniciante'),                   'exibe o nível correto',               'nível não encontrado na saída');
} catch (e) {
  falha('trilha iniciante', e.message);
}

try {
  const saida = rodar('node commands/trilha.js intermediario');
  assert(saida.includes('JavaScript'),                  'retorna trilha intermediária com JavaScript', 'JavaScript ausente');
  assert(saida.includes('intermediario'),               'exibe nível intermediario',                   'nível não encontrado');
} catch (e) {
  falha('trilha intermediario', e.message);
}

try {
  const saida = rodar('node commands/trilha.js avancado');
  assert(saida.includes('React'),                       'retorna trilha avançada com React',  'React ausente');
  assert(saida.includes('avancado'),                    'exibe nível avancado',               'nível não encontrado');
} catch (e) {
  falha('trilha avancado', e.message);
}

try {
  const saida = rodar('node commands/trilha.js inexistente');
  assert(saida.includes('❌'),                           'nível inválido exibe mensagem de erro', 'mensagem de erro ausente');
} catch (e) {
  falha('trilha nivel invalido', e.message);
}

// ─── resumo ──────────────────────────────────────────────────────────────────

console.log(`\n  Resultado: ${passou} passou(ram) | ${falhou} falhou(aram)\n`);
if (falhou > 0) process.exit(1);
