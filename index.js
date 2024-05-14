let count = document.getElementById("count");
let button = document.querySelector("button");

const result = () => {
  count.textContent = "Belo Film";
};

button.addEventListener("click", () => {
  result();
});
