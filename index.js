//Se activa el sonido con un click

var botones = document.querySelectorAll("button"); //Selecciona todos los "button"

function BotonClick(){ //función que llana a cada botón

    var botonInnerHTML = this.innerHTML;

    sonidos(botonInnerHTML); //Llama a la función Sonidos

    BotonesAnimacion(botonInnerHTML);

}

botones.forEach((boton) => {
    boton.addEventListener("click", BotonClick); //Cuando se hace click en un botón su respectivo sonido se activa
});



//Se activa el sonido con la tecla

document.addEventListener("keydown", function(event){ //Detecta cuando se presiona una tecla

    sonidos(event.key); //Activa la función sonidos con su respectiva tecla

    BotonesAnimacion(event.key);
    
});

function sonidos(key){

    switch (key) {
        case "w":
             var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
             break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            
        default: console.log(botonInnerHTML)
    }

}

function BotonesAnimacion(letra){

    var LetraUsada = document.querySelector("." + letra);

    LetraUsada.classList.add("pressed");

    setTimeout(function(){
        LetraUsada.classList.remove("pressed");
    }, 100);

}