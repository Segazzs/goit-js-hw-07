let allCategories = document.querySelectorAll(".item");

console.log("Number of categories: " + allCategories.length);

allCategories.forEach((elem) => {
  console.log("Category: " + elem.querySelector("h2").textContent);
  console.log("Elements: " + elem.getElementsByTagName("li").length);
});
