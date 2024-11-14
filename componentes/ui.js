import criarCard from "./card.js";

export function mostrarCard(container, dados) {
  const removeElement = document.getElementsByClassName("container");
  if (removeElement && removeElement.length > 0) {
    removeElement[0].remove();
  }
  const div = document.createElement("div");
  div.classList.add("container");
  container.appendChild(div);
  dados.results.forEach((item) => {
    const card = criarCard(item);
    div.appendChild(card);
  });
}
