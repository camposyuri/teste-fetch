// async function getData(url) {
//   const resp = await fetch(url);
//   const json = await resp.json();
//   return json;
// }

// getData("https://api.github.com/users/camposyuri/repos").then((value) => {
//   const retorno = value.map((item) => {
//     return item.name;
//   });

//   return (document.querySelector("#app").innerHTML = retorno);
// });

function adicionaTexto() {
  fetch("../arquivo.txt")
    .then((response) => response.text())
    .then((dadosText) => {
      return (document.querySelector(
        "#app"
      ).innerHTML = dadosText.toUpperCase());
    });
}
adicionaTexto();
