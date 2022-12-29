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

const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.querySelector("#register-username");
  const password = document.querySelector("#register-password");

  const url = `http://localhost:3000/users/register`;
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      user_password: password.value,
    }),
  };

  const response = await fetch(url, options);

  if (response.status == 201) {
    registerModal.classList.add("hidden");
    loginModal.classList.remove("hidden");
    username.value = "";
    password.value = "";
  }

  const data = await response.json();
  console.log(data);
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.querySelector("#login-username");
  const password = document.querySelector("#login-password");

  const url = `http://localhost:3000/users/login`;
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      user_password: password.value,
    }),
  };

  const response = await fetch(url, options);
  const data = await response.json();
  if (response.status == 200) {
    loginModal.classList.add("hidden");
    username.value = "";
    password.value = "";
    localStorage.setItem("session", data.session);
  }

  console.log(data);
});
