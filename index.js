let names = ["Ida", "Carlo", "Serena", "Antonio", "Angelina"];

let button = document.querySelector("button");
let look = document.querySelector("h1");

const nomeCasuale = () => {
  let casualName = Math.floor(Math.random() * names.length);
  let casualIndex = names[casualName];
  look.innerHTML = casualIndex;
};

button.addEventListener("click", () => {
  nomeCasuale();
});
