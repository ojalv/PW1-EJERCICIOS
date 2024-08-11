/*
Ejercicio 6: Verificar Palíndromo
Crea una función que verifique si una palabra es un palíndromo (se lee igual de adelante hacia
atrás). Muestra el resultado en un elemento HTML.
*/

function esPalindromo(palabra) {
  if (palabra.split("").reverse().join("") === palabra) {
    return true;
  }
  return false;
}
document.getElementById("busqueda-btn").addEventListener("click", () => {
  const busqueda = document.getElementById("busqueda-inp").value;
  document.getElementById(
    "resultado"
  ).innerHTML = `<h2>Resultado</h2><p>Es palindromo: ${
    esPalindromo(busqueda) ? "Si" : "No"
  }</p>`;
  document.getElementById("resultado").classList.remove("hidden");
});
