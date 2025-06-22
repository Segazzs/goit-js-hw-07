let text = document.querySelector("#name-input");
let nickname = document.querySelector("#name-output");

text.addEventListener("input", () => {
  nickname.textContent = text.value;
});

console.log(nickname.textContent);
