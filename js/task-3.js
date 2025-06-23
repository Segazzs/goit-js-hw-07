let text = document.querySelector("#name-input");
let nickname = document.querySelector("#name-output");

text.addEventListener("input", () => {
  if (text.value === "") {
    nickname.textContent = "Anonymus";
  } else {
    nickname.textContent = text.value.trim();
  }
});

console.log(nickname.textContent);
