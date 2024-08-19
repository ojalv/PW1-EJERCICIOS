/*
Ejercicio 13:
Validar Dirección de Correo Electrónico: Desarrolla una función que valide si una cadena de texto
es una dirección de correo electrónico válida. Muestra el resultado en un elemento HTML.
*/

function esValido(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(email)) {
    return "El correo electrónico es válido.";
  } else {
    return "El correo electrónico no es válido.";
  }
}
document.getElementById("busqueda-btn").addEventListener("click", () => {
  const email = document.getElementById("busqueda-inp").value;
  document.getElementById(
    "resultado"
  ).innerHTML = `${esValido(email)}`;
  document.getElementById("resultado").classList.remove("hidden");
});
