/*
Ejercicio 11:
Convertir Temperatura: Crea una función que convierta grados Celsius a Fahrenheit y viceversa.
Muestra el resultado en un elemento HTML.
*/

const temperaturaC = 11;

function convertirCaF(temperaturaC) {
  return temperaturaC * 1.8 + 32;
}


document.getElementById("array").innerHTML = `<h2>Temperatura actual (C)</h2><p>${temperaturaC} Celsius</p>`;

document.getElementById(
  "resultado"
).innerHTML = `<h2>Temperatura actual (F)</h2><p>${convertirCaF(temperaturaC)} Fahrenheit</p>`;

document.getElementById("mostar-resultado").addEventListener("click", () => {
  document.getElementById("resultado").classList.toggle("hidden");
});
