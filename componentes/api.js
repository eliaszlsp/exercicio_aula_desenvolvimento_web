export async function buscarDados(name = "rick", status = "alive") {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`
  );
  if (!response.ok) {
    throw new Error("Sem rede");
  }
  return response.json();
}
