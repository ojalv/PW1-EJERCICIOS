/*
Ejercicio 3: Contar Ocurrencias
Crea una función que tome un array de strings y un string de búsqueda, y devuelva el número de
veces que el string de búsqueda aparece en el array. Muestra el resultado en un elemento HTML.
*/

const array = [
  "manzana",
  "banana",
  "pera",
  "manzana",
  "banana",
  "banana",
  "banana",
];

function contadorOcurrencias(stringBusqueda, array) {
  let contador = 0;
  array.forEach((string) => {
    if (stringBusqueda === string) {
      contador++;
    }
  });
  return contador;
}

document.getElementById(
  "array"
).innerHTML = `<h2>Array de strings</h2><p>[${array}]</p>`;

document.getElementById("busqueda-btn").addEventListener("click", () => {
  const busqueda = document.getElementById("busqueda-inp").value;
  document.getElementById("resultado").innerHTML = `<h2>Resultado</h2><p>Cantidad de veces que aparece tu palabra: ${contadorOcurrencias(busqueda,array)}</p>`;
  document.getElementById("resultado").classList.remove("hidden")
});
