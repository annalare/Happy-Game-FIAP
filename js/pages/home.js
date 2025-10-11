(() => {
  const KONAMI_CODE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
  ];

  const KONAMI_STRING = JSON.stringify(KONAMI_CODE);
  const state = { sequence: [] };

  const createFloatingBalloon = () => {
    const balloon = document.createElement("div");
    balloon.className = "floating-balloon";
    balloon.innerHTML = `
      <div class="text-center p-3">
        <p class="mb-0 small fw-bold balloon-content">
          Pressione ↑ ↑ ↓ ↓ ← → e descubra uma surpresa 🎮
        </p> 
      </div>
    `;
    document.body.appendChild(balloon);
    return balloon;
  };

  const showAchievementModal = (balloon) => {
    balloon.remove();

    const achievementModal = document.createElement("div");
    achievementModal.className = "modal fade";
    achievementModal.setAttribute("tabindex", "-1");
    achievementModal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark border border-success border-2">
          <div class="modal-header border-secondary">
            <h5 class="modal-title text-success fw-bold">
              🎮 CÓDIGO SURPRESA ATIVADO! 🎮
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body text-center py-5">
            <div class="mb-4">
              <i class="fas fa-trophy text-success" style="font-size: 4rem;"></i>
            </div>
            <h3 class="text-white mb-4">Parabéns, verdadeiro gamer!</h3>
            <p class="text-light mb-4">Você desbloqueou o easter egg secreto!</p>
            <div class="d-flex gap-2 justify-content-center flex-wrap">
              <span class="badge bg-success text-dark px-3 py-2">Conquista Desbloqueada</span>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(achievementModal);

    const modalInstance = new bootstrap.Modal(achievementModal);
    modalInstance.show();

    achievementModal.addEventListener(
      "hidden.bs.modal",
      () => achievementModal.remove(),
      {
        once: true,
      }
    );
  };

  const init = () => {
    const balloon = createFloatingBalloon();

    document.addEventListener("keydown", (e) => {
      state.sequence = [...state.sequence, e.key].slice(-KONAMI_CODE.length);

      if (JSON.stringify(state.sequence) === KONAMI_STRING) {
        showAchievementModal(balloon);
        state.sequence = [];
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
