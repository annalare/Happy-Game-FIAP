// Konami Code Challenge
(() => {
  const KONAMI_CODE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  let userSequence = [];
  let floatingBalloon = null;

  const createFloatingBalloon = () => {
    const balloon = document.createElement("div");
    balloon.className = "floating-balloon";
    balloon.innerHTML = `
      <div class="text-center p-3">

        <p class="mb-0 small fw-bold balloon-content">Ative o easter egg <br> Você conhece o código Konami?</p>
      </div>
    `;
    document.body.appendChild(balloon);
    return balloon;
  };

  const showSuccessModal = () => {
    if (floatingBalloon) {
      floatingBalloon.remove();
    }

    const modalHTML = `
      <div class="modal fade" id="konamiSuccessModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-dark border border-success border-2">
            <div class="modal-header border-secondary">
              <h5 class="modal-title text-success fw-bold">
                🎮 CÓDIGO KONAMI ATIVADO! 🎮
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
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);
    const modal = new bootstrap.Modal(
      document.getElementById("konamiSuccessModal")
    );
    modal.show();

    document
      .getElementById("konamiSuccessModal")
      .addEventListener("hidden.bs.modal", function () {
        this.remove();
      });
  };

  const checkKonamiCode = (key) => {
    userSequence.push(key);

    if (userSequence.length > KONAMI_CODE.length) {
      userSequence.shift();
    }

    if (JSON.stringify(userSequence) === JSON.stringify(KONAMI_CODE)) {
      showSuccessModal();
      userSequence = [];
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    floatingBalloon = createFloatingBalloon();

    document.addEventListener("keydown", (e) => {
      checkKonamiCode(e.key);
    });
  });
})();
