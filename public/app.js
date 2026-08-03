const nivelTrilha = document.getElementById('nivel-trilha');
const btnTrilha = document.getElementById('btn-trilha');
const moduloBotoes = document.getElementById('modulo-botoes');
const moduloDetalhe = document.getElementById('modulo-detalhe');

const nivelDesafio = document.getElementById('nivel-desafio');
const btnDesafio = document.getElementById('btn-desafio');
const desafioDetalhe = document.getElementById('desafio-detalhe');

const nomeCertificado = document.getElementById('nome-certificado');
const nivelCertificado = document.getElementById('nivel-certificado');
const btnCertificado = document.getElementById('btn-certificado');
const certificadoDetalhe = document.getElementById('certificado-detalhe');
const imgCertificado = document.getElementById('img-certificado');

function limparBotoesModulos() {
  moduloBotoes.innerHTML = '';
  moduloDetalhe.textContent = 'Selecione um módulo para visualizar a descrição.';
}

btnTrilha.addEventListener('click', async () => {
  const nivel = nivelTrilha.value;
  const resposta = await fetch(`/api/trilha?nivel=${encodeURIComponent(nivel)}`);
  const data = await resposta.json();

  limparBotoesModulos();

  data.modulos.forEach((modulo) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.textContent = modulo.titulo;
    botao.addEventListener('click', () => {
      moduloDetalhe.innerHTML = `
        <strong>${modulo.titulo}</strong><br />
        ${modulo.descricao}<br /><br />
        <strong>Carga horária:</strong> ${modulo.carga_horaria}<br />
        <strong>Tópicos:</strong> ${modulo.topicos.join(' • ')}
      `;
    });
    moduloBotoes.appendChild(botao);
  });
});

btnDesafio.addEventListener('click', async () => {
  const nivel = nivelDesafio.value;
  const resposta = await fetch(`/api/desafio?nivel=${encodeURIComponent(nivel)}`);
  const data = await resposta.json();

  desafioDetalhe.innerHTML = `
    <strong>${data.modulo}</strong><br />
    ${data.desafio}<br /><br />
    <strong>Nível:</strong> ${data.nivel}<br />
    <strong>Tecnologia:</strong> ${data.tecnologia}
  `;
});

btnCertificado.addEventListener('click', async () => {
  const nome = nomeCertificado.value || 'Estudante';
  const nivel = nivelCertificado.value;
  const resposta = await fetch(`/api/certificado?nome=${encodeURIComponent(nome)}&nivel=${encodeURIComponent(nivel)}`);
  const data = await resposta.json();

  certificadoDetalhe.innerHTML = `
    <strong>${data.nome}</strong><br />
    Concluiu com êxito a trilha <strong>${data.titulo}</strong><br /><br />
    <strong>Nível:</strong> ${data.nivel} • <strong>Carga horária:</strong> ${data.carga}<br />
    <strong>Emissor:</strong> ${data.emissor} • <strong>Data:</strong> ${data.data}
  `;

  imgCertificado.src = data.imagem || '';
  imgCertificado.style.display = data.imagem ? 'block' : 'none';
});
