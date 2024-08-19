/*
Ejercicio 12:
Buscar el Elemento más Frecuente: Escribe una función que encuentre el elemento que más se
repite en un array. Muestra el resultado en un elemento HTML.
*/

const array = [4, 5, 5, "pera", 1, 1, "1", 2, 2, 3, 4, 5, "pera", 5, 5, 5, 5];

function masRepetido(array) {
  function indiceMayorContado(arrayContador) {
    let mayor = 0;
    for (let i = 0; i < arrayContador.length; i++) {
      let a = arrayContador[i];
      let b = arrayContador[mayor];
      for (let j = 0; j < arrayContador.length; j++) {
        if (a > b) {
          mayor = i;
        }
      }
    }
    // console.log(`indice:${mayor}`);
    return mayor;
  }
  let arrayContador = [];
  let arrayElementos = [];

  array.forEach((e) => {
    if (!arrayElementos.includes(e)) {
      arrayElementos.push(e);
      arrayContador.push(1);
    } else {
      let i = arrayElementos.findIndex((f) => {
        return f === e;
      });

      arrayContador[i]++;
    }
  });

  console.table({ arrayElementos, arrayContador });
  return arrayElementos[indiceMayorContado(arrayContador)];
}
masRepetido(array);


document.getElementById("array").innerHTML = `<h2>Array</h2><p>[${array}]</p>`;

document.getElementById(
  "resultado"
).innerHTML = `<h2>Resultado</h2><p>${masRepetido(array)}</p>`;

document.getElementById("mostar-resultado").addEventListener("click", () => {
  document.getElementById("resultado").classList.toggle("hidden");
});
