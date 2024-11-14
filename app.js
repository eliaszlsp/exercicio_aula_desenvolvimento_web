import { buscarDados } from "./componentes/api.js";
import { mostrarCard } from "./componentes/ui.js";
import criarformHtml from "./componentes/form.js";

const appContainer = document.getElementById("app");

async function init() {
  try {
    const formulario = appContainer.appendChild(criarformHtml());

    formulario.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const dataObject = {};
      formData.forEach((value, key) => {
        dataObject[key] = value;
      });
      const dadosExternos = await buscarDados(
        dataObject.name,
        dataObject.status
      );

      mostrarCard(appContainer, dadosExternos);
    });
  } catch (error) {
    console.error("Error ao buscar dados:", error);
  }
}
init();
