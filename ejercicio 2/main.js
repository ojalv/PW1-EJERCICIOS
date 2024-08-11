/*
Ejercicio 2: Filtrar Números Pares
Escribe una función que reciba un array de números y devuelva un nuevo array con solo los
números pares. Muestra el array resultante en un elemento HTML.
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrarElementos(array) {
  let newArray = []
  array.forEach(element => {
    if ((element%2) == 0) {
        newArray.push(element)
    }
  });
  return newArray
}

document.getElementById(
  "array"
).innerHTML = `<h2>Array de numeros</h2><p>[${array}]</p>`;

document.getElementById(
  "resultado"
).innerHTML = `<h2>Resultado</h2><p>[${filtrarElementos(array)}]</p>`;

document.getElementById("mostar-resultado").addEventListener("click", () => {
    document.getElementById("resultado").classList.toggle("hidden");
  });
  
