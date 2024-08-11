/*
Ejercicio 5: Calcular Promedio

Crea una función que tome un array de números y devuelva el promedio de estos. Muestra el
resultado en un elemento HTML.
 */

const array = [9, 9, 8, 7, 9, 9];

function promedio(array) {
  let sum = 0;
  array.forEach((n) => {
    sum += n;
  });

  return sum / array.length;
}

document.getElementById(
  "array"
).innerHTML = `<h2>Array de numeros</h2><p>[${array}]</p>`;

document.getElementById(
  "resultado"
).innerHTML = `<h2>Resultado</h2><p>${promedio(array)}</p>`;

document.getElementById("mostar-resultado").addEventListener("click", () => {
  document.getElementById("resultado").classList.toggle("hidden");
});
