/*
Ejercicio 7: Ordenar Números

Escribe una función que reciba un array de números y los ordene de forma ascendente. Muestra el
resultado en un elemento HTML.
 */


const array = [3,6,2,10,4,7,5,8,9,1]

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
          if (arr[i] > arr[i + 1]) {
              // Intercambiar los elementos
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;

              swapped = true;
          }
      }
      // Después de cada iteración, el último elemento es el más grande, así que reducimos n
      n--;
  } while (swapped);

  return arr;
}


document.getElementById(
  "array"
).innerHTML = `<h2>Array de numeros</h2><p>[${array}]</p>`;

document.getElementById(
  "resultado"
).innerHTML = `<h2>Resultado</h2><p>[${bubbleSort(array)}]</p>`;

document.getElementById("mostar-resultado").addEventListener("click", () => {
  document.getElementById("resultado").classList.toggle("hidden");
});

