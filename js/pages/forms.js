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

  const formatarTelefone = function (valor) {
    const digitos = valor.replace(/\D/g, "");
    const digitosLimitados = digitos.slice(0, 11);

    // Aplica a formatação
    if (digitosLimitados.length === 0) return "";
    if (digitosLimitados.length <= 2) return `(${digitosLimitados})`;
    if (digitosLimitados.length <= 6) return `(${digitosLimitados.slice(0, 2)})${digitosLimitados.slice(2)}`;
    if (digitosLimitados.length <= 10) return `(${digitosLimitados.slice(0, 2)})${digitosLimitados.slice(2, 6)}-${digitosLimitados.slice(6)}`;

    return `(${digitosLimitados.slice(0, 2)}) ${digitosLimitados.slice(2, 7)}-${digitosLimitados.slice(7)}`;
  };

  inputTelefone.addEventListener("input", (e) => {
    e.target.value = formatarTelefone(e.target.value);
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
