const inicializarFeedback = function () {
  const dadosUsuario = buscarDadosUsuario();

  if (!dadosUsuario) {
    window.location.href = "forms.html";
    return;
  }

  const tituloHero = document.querySelector(".feedback-hero h1");
  const descricaoHero = document.querySelector(".feedback-hero p");
  const containerCards = document.querySelector(".fomo-cards");

  personalizarTitulo(tituloHero, dadosUsuario.nome);
  personalizarDescricao(descricaoHero, dadosUsuario.plataforma);
  renderizarCards(containerCards, dadosUsuario.generos);
};

const personalizarTitulo = function (elemento, nome) {
  if (elemento && nome) {
    elemento.textContent = `Bem-vindo(a), ${nome}! Cadastro Realizado com Sucesso!`;
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

  const cardsFixos = [
    {
      icone: "fas fa-gamepad",
      titulo: "Lançamentos Exclusivos",
      descricao: "Seja o primeiro a saber sobre novos jogos e atualizações",
    },

    {
      icone: "fas fa-trophy",
      titulo: "Eventos Especiais",
      descricao: "Participe de torneios e competições com prêmios incríveis",
    },
  ];

  const cardsPorGenero = {
    rpg: {
      icone: "fas fa-dragon",
      titulo: "Aventuras Épicas",
      descricao: "Explore mundos fantásticos e narrativas profundas criadas pela comunidade",
    },

    fps: {
      icone: "fas fa-crosshairs",
      titulo: "Competições Táticas",
      descricao: "Participe de torneios e aperfeiçoe suas habilidades em combate",
    },

    indie: {
      icone: "fas fa-palette",
      titulo: "Descobertas Criativas",
      descricao: "Encontre joias indie únicas recomendadas pela nossa comunidade",
    },

    esportes: {
      icone: "fas fa-futbol",
      titulo: "Ligas Esportivas",
      descricao: "Compete em campeonatos dos seus esportes virtuais favoritos",
    },

    moba: {
      icone: "fas fa-chess",
      titulo: "Estratégia em Equipe",
      descricao: "Monte sua equipe perfeita e domine as arenas competitivas",
    },
  };

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

document.addEventListener("DOMContentLoaded", inicializarFeedback);
