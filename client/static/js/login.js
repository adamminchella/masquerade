const loginButton = document.querySelector(".login-nav-icon");

const loginModal = document.querySelector(".login-modal");
const registerModal = document.querySelector(".register-modal");

const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

loginButton.addEventListener("click", () => {
  loginModal.classList.remove("hidden");
});

registerLink.addEventListener("click", () => {
  loginModal.classList.add("hidden");
  registerModal.classList.remove("hidden");
});

loginLink.addEventListener("click", () => {
  registerModal.classList.add("hidden");
  loginModal.classList.remove("hidden");
});

window.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("modal") ||
    e.target.classList.contains("modal-close")
  ) {
    if (!loginModal.classList.contains("hidden")) {
      loginModal.classList.add("hidden");
    }
    if (!registerModal.classList.contains("hidden")) {
      registerModal.classList.add("hidden");
    }
  }
});
