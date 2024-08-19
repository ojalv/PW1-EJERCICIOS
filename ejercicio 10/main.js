/*
Ejercicio 10:
Contar Vocales: Desarrolla una función que cuente el número de vocales en una cadena de texto.
Muestra el resultado en un elemento HTML.
*/

const texto = "erAse uNA vEz en UN REIno Muy mUY LeJANO, pERO mUY lEJAno...";

function contarVocales(text) {
  let contadorVocales = 0;
  for (let i = 0; i < text.length; i++) {
    if (
      text[i].toLowerCase() === "a" ||
      text[i].toLowerCase() === "e" ||
      text[i].toLowerCase() === "i" ||
      text[i].toLowerCase() === "o" ||
      text[i].toLowerCase() === "u"
    ) {
      contadorVocales++;
    }
  }

  return contadorVocales;
}


document.getElementById("array").innerHTML = `<h2>Texto</h2><p>${texto}</p>`;

document.getElementById(
  "resultado"
).innerHTML = `<h2>Resultado</h2><p>En el texto hay ${contarVocales(texto)} vocales</p>`;

document.getElementById("mostar-resultado").addEventListener("click", () => {
  document.getElementById("resultado").classList.toggle("hidden");
});
