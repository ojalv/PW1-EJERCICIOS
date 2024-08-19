/*
Ejercicio 14:
Generador de Contraseñas: Crea una función que genere una contraseña aleatoria de una longitud
especificada por el usuario, incluyendo letras mayúsculas, minúsculas, números y símbolos.
Muestra el resultado en un elemento HTML.
*/

function generarContraseña(longitud) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
  let contraseña = '';
  
  for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      contraseña += caracteres.charAt(indiceAleatorio);
  }
  
  return contraseña;
}
document.getElementById("busqueda-btn").addEventListener("click", () => {
  const longitud = document.getElementById("busqueda-inp").value;
  document.getElementById(
    "resultado"
  ).innerHTML = `${generarContraseña(longitud)}`;
  document.getElementById("resultado").classList.remove("hidden");
});
