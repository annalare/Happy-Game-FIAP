import { cardsFixos, cardsPorGenero } from "../data/feedbackCards.js";
import { buscarDadosUsuario, limparDadosUsuario } from "../utils/storage.js";

export default function initFeedback() {
	const dadosUsuario = buscarDadosUsuario();

	if (!dadosUsuario) {
		window.location.href = "forms.html";
		return;
	}

	const tituloHero = document.querySelector(".feedback-hero h1");
	const descricaoHero = document.querySelector(".feedback-hero p");
	const containerCards = document.querySelector(".fomo-cards");

	const personalizarTitulo = function (elemento, nome) {
		if (elemento && nome) {
			elemento.textContent = `Bem-vindo(a), ${nome}! Cadastro realizado com sucesso!`;
		}
	};

	const personalizarDescricao = function (elemento, plataforma) {
		if (!elemento || !plataforma) return;

		let descricao = "";

		switch (plataforma) {
			case "pc":
				descricao =
					"Prepare-se para uma experiência épica no mundo dos games para PC!";
				break;
			case "console":
				descricao =
					"Relaxe e aproveite os melhores jogos no conforto do seu sofá!";
				break;
			case "mobile":
				descricao = "Jogue onde estiver e conecte-se com gamers do mundo todo!";
				break;
			case "retro":
				descricao = "Reviva os clássicos que marcaram gerações de jogadores!";
				break;
			default:
				descricao =
					"Parabéns! Você agora faz parte da nossa comunidade de gamers. Prepare-se para uma experiência incrível cheia de aventuras e conexões.";
		}
		elemento.textContent = descricao;
	};

	const renderizarCards = function (container, generos) {
		if (!container) return;

		const todosOsCards = [...cardsFixos];

		if (generos && generos.length > 0) {
			generos.forEach((genero) => {
				const card = cardsPorGenero[genero];

				if (card) {
					todosOsCards.push(card);
				}
			});
		}

		const htmlCards = todosOsCards.map(criarCardHtml).join("");

		container.innerHTML = htmlCards;
	};

	const criarCardHtml = (card) => {
		return `<div class="col-12 col-md-6 col-lg-4">
      <div class="fomo-card">
          <div class="fomo-icon mb-4">
              <i class="${card.icone}"></i>
          </div>
          <h3 class="orbitron-font text-center mb-3">${card.titulo}</h3>
          <p class="text-center mb-0">${card.descricao}</p>
      </div>
  </div>`;
	};

	personalizarTitulo(tituloHero, dadosUsuario.nome);
	personalizarDescricao(descricaoHero, dadosUsuario.plataforma);
	renderizarCards(containerCards, dadosUsuario.generos);

	// limpa o localStorage quando sai da página
	document.querySelectorAll("a[href]").forEach((link) => {
		link.addEventListener("click", () => {
			limparDadosUsuario();
		});
	});
}
