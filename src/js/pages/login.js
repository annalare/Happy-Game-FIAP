export function initializeLogin() {
	const loginForm = document.getElementById("loginForm");

	if (!loginForm) return;

	loginForm.addEventListener("submit", async function (e) {
		e.preventDefault();

		const formData = new FormData(loginForm);
		const loginData = {
			email: formData.get("email"),
			senha: formData.get("senha"),
			lembrarMe: document.getElementById("lembrarMe")?.checked || false,
		};

		if (!loginData.email || !loginData.senha) {
			showMessage("Por favor, preencha todos os campos obrigatórios.", "error");
			return;
		}

		try {
			showMessage("Fazendo login...", "info");

			await new Promise((resolve) => setTimeout(resolve, 1500));

			const userData = {
				email: loginData.email,
				loggedIn: true,
				loginTime: new Date().toISOString(),
			};

			if (loginData.lembrarMe) {
				localStorage.setItem("happyGameUser", JSON.stringify(userData));
			} else {
				sessionStorage.setItem("happyGameUser", JSON.stringify(userData));
			}

			showMessage("Login realizado com sucesso! Redirecionando...", "success");

			setTimeout(() => {
				window.location.href = "platform.html";
			}, 1500);
		} catch (error) {
			console.error("Erro no login:", error);
			showMessage(
				"Erro ao fazer login. Verifique suas credenciais e tente novamente.",
				"error"
			);
		}
	});
}

function showMessage(message, type) {
	const existingMessage = document.querySelector(".login-message");
	if (existingMessage) {
		existingMessage.remove();
	}

	const messageDiv = document.createElement("div");
	messageDiv.className = `alert login-message alert-dismissible fade show`;

	switch (type) {
		case "success":
			messageDiv.classList.add("alert-success");
			break;
		case "error":
			messageDiv.classList.add("alert-danger");
			break;
		case "info":
			messageDiv.classList.add("alert-info");
			break;
		default:
			messageDiv.classList.add("alert-secondary");
	}

	messageDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

	const form = document.getElementById("loginForm");
	form.parentNode.insertBefore(messageDiv, form);

	if (type !== "success") {
		setTimeout(() => {
			if (messageDiv && messageDiv.parentNode) {
				messageDiv.remove();
			}
		}, 5000);
	}
}
