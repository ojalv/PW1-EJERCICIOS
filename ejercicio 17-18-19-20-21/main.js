/*
Ejercicio 17: Mostrar la Palabra con Letras Ocultas
Escribe una función que tome la palabra seleccionada y la convierta en una serie de guiones bajos o
espacios vacíos, mostrando cuántas letras tiene la palabra. Cada vez que el jugador adivina una letra
correcta, la función debe actualizar esta visualización con las letras adivinadas correctamente.
Ejercicio 18: Detectar Letras Ingresadas por el Usuario
Desarrolla una función que capture la entrada del usuario (puede ser a través de un input o creando
un teclado en pantalla con botones, uno para cada letra) y determine si la letra ingresada está en la
palabra seleccionada. Si es correcta, muestra la letra en su posición correspondiente; si es
incorrecta, añade la letra a la lista de intentos fallidos.
Ejercicio 19: Actualizar el Estado del Ahorcado
Crea una función que actualice la representación visual del ahorcado cada vez que el jugador
comete un error. Dependiendo de cuántos intentos fallidos tenga el jugador, la función debe mostrar
diferentes partes del cuerpo del ahorcado o un contador de fallos.
Ejercicio 20: Verificar si el Juego ha Terminado
Desarrolla una función que verifique si el juego ha terminado, ya sea porque el jugador ha
adivinado todas las letras de la palabra o porque ha cometido demasiados errores. Si el juego ha
terminado, muestra un mensaje de "Victoria" o "Derrota" y da la opción de reiniciar el juego.
Ejercicio 21: Reiniciar el Juego
Escribe una función que reinicie el juego, permitiendo al usuario comenzar una nueva partida. La
función debe restablecer todas las variables y el estado de la interfaz a su estado inicial, y
seleccionar una nueva
*/
function selectWord(words) {
  return words[Math.round(Math.random() * (words.length - 1))].toLowerCase();
}

function renderSlots(hiddenWord) {
  for (let i = 0; i < hiddenWord.length; i++) {
    const div = document.createElement("div");
    div.classList.add("enigma-letter");
    document.getElementById("enigma-word").appendChild(div);
  }
}

function hurtMonigote(badTries) {
  document.querySelectorAll("#hangman div")[
    badTries - 1
  ].style.backgroundColor = "red";
}

function renderLetter(hiddenWord, letter) {
  for (let i = 0; i < hiddenWord.length; i++) {
    if (letter == hiddenWord[i]) {
      document.querySelectorAll("#enigma-word div")[i].textContent = letter;
    }
  }
}

function hiddenWordIncludesLetter(hiddenWord, letter) {
  return hiddenWord.includes(letter);
}

function clearInput(id) {
  document.getElementById(id).value = "";
}

function validInput(letter) {
  return letter.length == 1;
}

function badEnding(badTries) {
  return badTries - 1 >= 5;
}

function goodEnding(hiddenWord) {
  let enigmaWord = [];
  document.querySelectorAll("#enigma-word div").forEach((element) => {
    enigmaWord.push(element.textContent);
  });

  return hiddenWord == enigmaWord.join("");
}

function timeOutAlert(message) {
  setTimeout(() => {
    alert(message);
  }, 1000);
}

function paintABC(letter, color) {
  document.getElementById(letter).style.backgroundColor = color;
}

function game(e) {
  e.preventDefault();

  const letter = document.getElementById("try").letter.value.toLowerCase();

  if (!validInput(letter)) {
    clearInput("inp-letter");
    console.error("se ingreso mas de una letra");
  } else {
    if (!hiddenWordIncludesLetter(hiddenWord, letter)) {
      clearInput("inp-letter");
      console.log("letra incorrecta");
      paintABC(letter, "red");
      badTries++;
      if (badEnding(badTries)) {
        hurtMonigote(badTries);
        document.getElementById("try").remove("submit", game);
        timeOutAlert("Fin del juego, monigote esta muerto");
      } else {
        hurtMonigote(badTries);
      }
    } else {
      clearInput("inp-letter");
      renderLetter(hiddenWord, letter);
      paintABC(letter, "yellowgreen");
      if (goodEnding(hiddenWord)) {
        timeOutAlert("Victoria!");
        document.getElementById("try").remove("submit", game);
      }
    }
  }
}

const palabras = [
  "amigo",
  "casa",
  "perro",
  "gato",
  "sol",
  "luna",
  "cielo",
  "tierra",
  "agua",
  "fuego",
  "aire",
  "bosque",
  "rio",
  "mar",
  "montaña",
  "playa",
  "arena",
  "roca",
  "nube",
  "estrella",
  "coche",
  "moto",
  "bicicleta",
  "tren",
  "avion",
  "barco",
  "ciudad",
  "pueblo",
  "campo",
  "bosque",
  "parque",
  "jardin",
  "flor",
  "arbol",
  "planta",
  "fruto",
  "semilla",
  "hoja",
  "raiz",
  "tallo",
  "rama",
  "hierba",
  "camino",
  "calle",
  "carretera",
  "puente",
  "edificio",
  "escuela",
  "hospital",
  "tienda",
  "mercado",
  "restaurante",
  "cafeteria",
  "cine",
  "teatro",
  "museo",
  "biblioteca",
  "iglesia",
  "templo",
  "monumento",
  "estatua",
  "fuente",
  "reloj",
  "ventana",
  "puerta",
  "mesa",
  "silla",
  "cama",
  "sofa",
  "lampara",
  "espejo",
  "cortina",
  "alfombra",
  "cuadro",
  "pintura",
  "fotografia",
  "libro",
  "cuaderno",
  "pluma",
  "lapiz",
  "goma",
  "regla",
  "tijeras",
  "papel",
  "sobre",
  "carta",
  "correo",
  "mensaje",
  "telefono",
  "radio",
  "television",
  "computadora",
  "teclado",
  "raton",
  "pantalla",
  "impresora",
  "camara",
  "microfono",
  "altavoz",
  "audifonos",
];

let badTries = 0;
const hiddenWord = selectWord(words);

renderSlots(hiddenWord);

document.getElementById("try").addEventListener("submit", game);
