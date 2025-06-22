let forms = document.querySelector(".login-form");

forms.addEventListener("submit", (event) => {
  let obj = {};

  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  obj.email = email;
  obj.password = password;

  console.log(obj);
  form.reset();
});

console.log();
