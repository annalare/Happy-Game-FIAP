const coletarDadosFormulario = function () {
  const formulario = document.querySelector("form");
  const submitButton = document.querySelector(".botao-enviar");

  const inputNome = document.querySelector("#nome");
  const inputNickname = document.querySelector("#nickname");
  const inputEmail = document.querySelector("#email");
  const inputTelefone = document.querySelector("#telefone");
  const inputPlataforma = document.querySelector("#plataforma");

  const textareaMensagem = document.querySelector("#mensagem");
  const checkboxTermos = document.querySelector("#termos");

  const checkboxesGenero = document.querySelectorAll(
    'input[type="checkbox"][value]'
  );

  const originalButtonText = submitButton.innerHTML;

  const showLoading = function () {
    submitButton.disabled = true;
    submitButton.innerHTML = `
      <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Enviando...
    `;
  };

  const hideLoading = function () {
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonText;
  };

  const coletarGenerosSelecionados = function () {
    const generosSelecionados = [];

    checkboxesGenero.forEach((checkbox) => {
      if (checkbox.checked) {
        generosSelecionados.push(checkbox.value);
      }
    });
    return generosSelecionados;
  };

  inputTelefone.addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 6) {
      e.target.value = `(${valor.slice(0, 2)}) ${valor.slice(
        2,
        7
      )}-${valor.slice(7)}`;
    } else if (valor.length > 2) {
      e.target.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    } else if (valor.length > 0) {
      e.target.value = `(${valor}`;
    }
  });

  formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    showLoading();

    try {
      const dadosUsuario = {
        nome: inputNome.value,
        nickname: inputNickname.value,
        email: inputEmail.value,
        telefone: inputTelefone.value,
        plataforma: inputPlataforma.value,
        mensagem: textareaMensagem.value,
        aceitouTermos: checkboxTermos.checked,
        generos: coletarGenerosSelecionados(),
      };

      salvarDadosUsuario(dadosUsuario);

      await new Promise((resolve) => setTimeout(resolve, 800));

      window.location.href = "feedback.html";
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      hideLoading();
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
    }
  });
};

document.addEventListener("DOMContentLoaded", coletarDadosFormulario);
