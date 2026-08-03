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

// ─── testes: desafio.js ──────────────────────────────────────────────────────

console.log('\n🎯  desafio.js');

const niveis = ['iniciante', 'intermediario', 'avancado'];

niveis.forEach(nivel => {
  try {
    const saida = rodar(`node commands/desafio.js ${nivel}`);
    assert(saida.includes('Desafio Geo Explorer'),  `[${nivel}] exibe cabeçalho do desafio`,    'cabeçalho ausente');
    assert(saida.includes('Nível'),                 `[${nivel}] exibe o nível na saída`,         'rótulo Nível ausente');
    assert(saida.includes('Módulo'),                `[${nivel}] exibe o módulo sorteado`,        'rótulo Módulo ausente');
    assert(saida.includes('Desafio'),               `[${nivel}] exibe o texto do desafio`,       'rótulo Desafio ausente');
    assert(saida.includes(nivel),                   `[${nivel}] nível correto na saída`,         `esperado "${nivel}" na saída`);
    assert(saida.trim().length > 50,                `[${nivel}] saída tem conteúdo substancial`, 'saída muito curta');
  } catch (e) {
    falha(`desafio ${nivel}`, e.message);
  }
});

try {
  const saida = rodar('node commands/desafio.js fantasma');
  assert(saida.includes('❌'),                       'nível inválido exibe mensagem de erro', 'mensagem de erro ausente');
} catch (e) {
  falha('desafio nivel invalido', e.message);
}

// ─── resumo ──────────────────────────────────────────────────────────────────

console.log(`\n  Resultado: ${passou} passou(ram) | ${falhou} falhou(aram)\n`);
if (falhou > 0) process.exit(1);
