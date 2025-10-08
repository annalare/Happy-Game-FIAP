document.addEventListener('DOMContentLoaded', coletarDadosFormulario);

const coletarDadosFormulario = function () {
  const formulario = document.querySelector('form');

  const inputNome = document.querySelector('#nome');
  const inputNickname = document.querySelector('#nickname');
  const inputEmail = document.querySelector('#email');
  const inputTelefone = document.querySelector('#telefone');
  const inputPlataforma = document.querySelector('#plataforma');

  const textareaMensagem = document.querySelector('#mensagem');
  const checkboxTermos = document.querySelector('#termos');

  const checkboxesGenero = document.querySelectorAll('input[type="checkbox"][value]');

  const coletarGenerosSelecionados = function () {
    const generosSelecionados = [];

    checkboxesGenero.forEach((checkbox) => {
      if (checkbox.checked) {
        generosSelecionados.push(checkbox.value);
      }
    });
    return generosSelecionados;
  }

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const dadosUsuario = {
      nome: inputNome.value,
      nickname: inputNickname.value,
      email: inputEmail.value,
      telefone: inputTelefone.value,
      plataforma: inputPlataforma.value,
      mensagem: textareaMensagem.value,
      aceitouTermos: checkboxTermos.checked,
      generos: coletarGenerosSelecionados(),
    }

    salvarDadosUsuario(dadosUsuario);
  });
}

