/*
Ejercicio 8:

Eliminar Duplicados: Crea una función que tome un array de números y elimine los elementos
duplicados. Muestra el array resultante en un elemento HTML.
*/

let array = [1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,];

function eliminarDuplicados(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
			if (array[i] == array[j]) {
				array.splice(j,1)
				j--
			}
    }
  }
  return array;
}

document.getElementById(
  "array"
).innerHTML = `<h2>Array de numeros</h2><p>[${array}]</p>`;

document.getElementById(
  "resultado"
).innerHTML = `<h2>Resultado</h2><p>[${eliminarDuplicados(array)}]</p>`;

document.getElementById("mostar-resultado").addEventListener("click", () => {
  document.getElementById("resultado").classList.toggle("hidden");
});
