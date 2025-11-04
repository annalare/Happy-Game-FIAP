import initTelephoneFormat from "./telephone-format.js";
import { salvarDadosUsuario } from "../utils/storage.js";

export default function initGetFormData() {
	const formulario = document.querySelector("form");
	if (!formulario) return;

	const submitButton = document.querySelector(".botao-enviar");
	const inputTelefone = document.querySelector("#telefone");

	initTelephoneFormat(inputTelefone);

	const originalButtonText = submitButton.innerHTML;

	const showLoading = () => {
		submitButton.disabled = true;
		submitButton.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Enviando...`;
	};

	const hideLoading = () => {
		submitButton.disabled = false;
		submitButton.innerHTML = originalButtonText;
	};

	formulario.addEventListener("submit", async (evento) => {
		evento.preventDefault();
		showLoading();

		const generosSelecionados = [];
		document
			.querySelectorAll('input[type="checkbox"]:checked')
			.forEach((checkbox) => {
				generosSelecionados.push(checkbox.value);
			});

		// refatorado seleção de elementos form...
		const dadosUsuario = {
			nome: document.querySelector("#nome").value,
			nickname: document.querySelector("#nickname").value,
			email: document.querySelector("#email").value,
			telefone: inputTelefone.value,
			plataforma: document.querySelector("#plataforma").value,
			mensagem: document.querySelector("#mensagem").value,
			aceitouTermos: document.querySelector("#termos").checked,
			generos: generosSelecionados,
		};

		salvarDadosUsuario(dadosUsuario);
		await new Promise((resolve) => setTimeout(resolve, 800));
		window.location.href = "feedback.html";
	});
}
