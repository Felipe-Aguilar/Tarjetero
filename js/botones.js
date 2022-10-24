// Tarjetas
var tarjetaFrente = document.getElementById("imagen_tarjeta");
tarjetaFrente.style.display = "block";

var tarjetaFrente = document.getElementById("imagen_tarjeta2");
tarjetaFrente.style.display = "none";


function reverso(){
    var tarjetaFrente = document.getElementById("imagen_tarjeta");
    var tarjetaReverso = document.getElementById("imagen_tarjeta2");

    if (tarjetaFrente.style.display == "none") {
        tarjetaFrente.style.display = "block";
        tarjetaReverso.style.display = "none";
        
    }else if(tarjetaReverso.style.display == "none") {
        tarjetaReverso.style.display = "block";
        tarjetaFrente.style.display = "none";

    }
}

// function ocultar() {
//     var tarjetaFrente = document.getElementById("imagen_tarjeta");
//     var tarjetaReverso = document.getElementById("imagen_tarjeta2");

//     tarjetaFrente.style.background = "none";
// }