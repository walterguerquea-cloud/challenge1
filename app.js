
// variable

let amigosv = document.getElementById("amigo");//Crear listado amigos
let nombresAmigos = [];// Array que almacenara lista
let listaAmigos = document.getElementById("listaAmigos");//mostrar en pantalla la lista
let nombreAleatorio = document.getElementById("resultado");

function agregarAmigo() {//función que hace referencia al boton en el HTML
    
    let nombre = amigosv.value.trim();

    if (nombre==="") { // si el campo es vacio que se cumpla
        alert ("Por favor, escribe un nombre antes de añadir.");
        return;
    }
    
    nombresAmigos.push(amigosv.value);
    listaAmigos.innerHTML += `<li>${amigosv.value}</li>`;
    amigosv.value ="";
    }

    amigosv.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function sortearAmigo() {
    let azar= Math.floor(Math.random()*nombresAmigos.length);
    let amigoSecreto = nombresAmigos[azar];
    nombreAleatorio.innerHTML = `<li>El amigo secreto es:${amigoSecreto}</li>`;
}