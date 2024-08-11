/*
Ejercicio 4: Información de Usuarios

Crea una lista de objetos tipo JSON que representen a varios usuarios (nombre, edad, email).
Escribe una función que reciba esta lista y devuelva una lista de emails de los usuarios mayores de
edad. Muestra el resultado en un elemento HTML.

const usuarios = [ { nombre: "Juan", edad: 25, email: "juan@example.com" }, { nombre: "María",
edad: 17, email: "maria@example.com" }, { nombre: "Pedro", edad: 30, email:
"pedro@example.com" } ];
 */

const usuarios = `[
    {"nombre":"Juan","edad":25,"email":"juan@example.com"},
    {"nombre":"María","edad":17,"email":"maria@example.com"},
    {"nombre":"Pedro","edad":30,"email":"pedro@example.com"},
    {"nombre":"Hector","edad":40,"email":"hector@example.com"},
    {"nombre":"Matilda","edad":18,"email":"matilda@example.com"},
    {"nombre":"Berenice","edad":15,"email":"berenice@example.com"},
    {"nombre":"Tomas","edad":16,"email":"tomas@example.com"}
]`;

function filtrarEmailsPorEdad(usuariosJSON) {
  let usuariosFiltrados = [];
  JSON.parse(usuariosJSON).forEach((usuario) => {
    if (usuario.edad >= 18) {
      usuariosFiltrados.push(usuario.email);
    }
  });
  return usuariosFiltrados;
}

document.getElementById("array").innerHTML = `<h2>JSON</h2><p>\`${usuarios}\`</p>`;

document.getElementById("resultado").innerHTML =`<h2>Resultado</h2>`

filtrarEmailsPorEdad(usuarios).forEach((email) => {
  document.getElementById("resultado").innerHTML += `<a href="mailto:${email}">${email}</a>`;
});

document.getElementById("mostar-resultado").addEventListener("click", () => {
  document.getElementById("resultado").classList.toggle("hidden");
});
