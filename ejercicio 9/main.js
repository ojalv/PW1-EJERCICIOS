/*
Ejercicio 9: Capitalizar Palabras
Escribe una función que reciba una cadena de texto y devuelva la misma
cadena con la primera letra de cada palabra en mayúscula. Muestra el resultado en un elemento
HTML.
*/

const texto = "erAse uNA vEz en UN REIno Muy mUY LeJANO, pERO mUY lEJAno...";

function capitalizar(text) {
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    if (i === 0 || text[i-1] === " " || text[i-1] === "." || text[i-1] === ",") {
      newText += text[i].toUpperCase();
    } else {
      newText += text[i].toLowerCase();
    }
  }
  return newText;
}


document.getElementById(
  "array"
).innerHTML = `<h2>Texto</h2><p>${texto}</p>`;

document.getElementById(
  "resultado"
).innerHTML = `<h2>Resultado</h2><p>${capitalizar(texto)}</p>`;

document.getElementById("mostar-resultado").addEventListener("click", () => {
  document.getElementById("resultado").classList.toggle("hidden");
});
