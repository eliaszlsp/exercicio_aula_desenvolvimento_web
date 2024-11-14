export default function criarformHtml() {
  const form = document.createElement("div");
  form.innerHTML += `<form id="form">
      <input
        type="text"
        id="input"
        name="name"
        placeholder="Digite o nome do personagem"
      />
      <input id="vivo" type="radio" name="status" value="alive" />
      <label for="vivo">Vivo</label>
      <input id="morto" type="radio" name="status" value="dead" />
      <label for="morto">Morto</label> <button id="button">Buscar</button>
    </form>`;

  return form;
}
