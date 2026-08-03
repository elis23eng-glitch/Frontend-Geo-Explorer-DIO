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

// ─── testes: certificado.js ──────────────────────────────────────────────────

console.log('\n🏅  certificado.js');

try {
  const nome  = 'Elisangela Alves Vieira';
  const nivel = 'avancado';
  const saida = rodar(`node commands/certificado.js "${nome}" ${nivel}`);

  assert(saida.includes('CERTIFICADO DE CONCLUSÃO'),       'exibe título do certificado',            'título ausente');
  assert(saida.toUpperCase().includes(nome.toUpperCase()), 'contém o nome da pessoa usuária',        `nome "${nome}" não encontrado`);
  assert(saida.includes('React e Ecossistema Moderno'),    'contém o título da trilha avançada',     'título da trilha ausente');
  assert(saida.includes('avancado'),                       'exibe o nível correto',                  'nível ausente');
  assert(saida.includes('30h'),                            'exibe carga horária total (30h)',         'carga horária ausente');
  assert(saida.includes('DIO - Digital Innovation One'),   'exibe o emissor do certificado',         'emissor ausente');
  assert(/\d{2} de \w+ de \d{4}/.test(saida),             'exibe data no formato DD de Mês de AAAA','data com formato inválido');
} catch (e) {
  falha('certificado avancado para Elisangela', e.message);
}

try {
  const saida = rodar('node commands/certificado.js "Ana Lima" iniciante');
  assert(saida.toUpperCase().includes('ANA LIMA'),         'contém nome diferente (Ana Lima)',       'nome ausente');
  assert(saida.includes('Fundamentos do Front-End'),       'contém trilha iniciante',                'título da trilha ausente');
  assert(saida.includes('18h'),                            'exibe carga horária da trilha iniciante (18h)', 'carga horária incorreta');
} catch (e) {
  falha('certificado iniciante para Ana Lima', e.message);
}

try {
  const saida = rodar('node commands/certificado.js "Maria" nivelquenaoexiste');
  assert(saida.includes('❌'),                             'nível inválido exibe mensagem de erro',  'mensagem de erro ausente');
} catch (e) {
  falha('certificado nivel invalido', e.message);
}

// ─── resumo ──────────────────────────────────────────────────────────────────

console.log(`\n  Resultado: ${passou} passou(ram) | ${falhou} falhou(aram)\n`);
if (falhou > 0) process.exit(1);
