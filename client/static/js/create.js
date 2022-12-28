const titleInput = document.getElementById("title");
const titleLabel = document.querySelector(".title-label");

titleInput.addEventListener("input", () => {
  if (titleInput.value.length > 0) {
    titleLabel.classList.remove("hidden");
  } else {
    titleLabel.classList.add("hidden");
  }
});

const nameInput = document.getElementById("author");
const nameLabel = document.querySelector(".name-label");

nameInput.addEventListener("input", () => {
  nameLabel.classList.remove("hidden");
});
