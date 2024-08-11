/*
Ejercicio 1: Operaciones con Vectores
Crea una función que tome un array de números y devuelva la suma de todos sus elementos. Luego,
muestra el resultado en un elemento HTML.
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumarElementos(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

document.getElementById(
  "array"
).innerHTML = `<h2>Array de numeros</h2><p>[${array}]</p>`;

document.getElementById(
  "resultado"
).innerHTML = `<h2>Resultado</h2><p>${sumarElementos(array)}</p>`;

document.getElementById("mostar-resultado").addEventListener("click", () => {
  document.getElementById("resultado").classList.toggle("hidden");
});
