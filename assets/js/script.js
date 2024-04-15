
console.log('Hola Mundo');

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let error1 = document.getElementById("error1");

let nombreV = "";
let apellidoV = "";

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(e){
    e.preventDefault();

    nombreV = nombre.value;
    apellidoV = apellido.value;

    let numero1 = 1;
    let numero2 = "1";
    
    if(nombreV === ""){
        error1.innerHTML = "Error al ingresar el nombre";
        error1.style.color = "red";
        return;
    }

    alert("Igual pase jajajajajajaa");

    // console.log(nombreV);
    // console.log(apellidoV);
})