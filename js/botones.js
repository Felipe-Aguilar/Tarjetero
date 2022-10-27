// Tarjetas
    var tarjetaReverso = document.getElementById("imagen_reverso");
    tarjetaReverso.style.display = "none";
    var tarjetaReverso = document.getElementById("imagen_frente");
    tarjetaReverso.style.display = "block";

function verReverso(){
    var tarjetaFrente = document.getElementById("imagen_frente");
    var tarjetaReverso = document.getElementById("imagen_reverso");
    
    if (tarjetaFrente.style.display == "block") {
        tarjetaFrente.className = ("animate_animated animate__flipOutY img-fluid");
        tarjetaFrente.style.display = "none";
        
        tarjetaReverso.className =("animate_animated animate__flipInY img-fluid");
        tarjetaReverso.style.display = "block";
        
    }else if(tarjetaReverso.style.display == "block"){
        tarjetaFrente.className = ("animate_animated animate__flipOutY img-fluid");
        tarjetaFrente.style.display = "block";

        tarjetaReverso.className =("animate_animated animate__flipInY img-fluid");
        tarjetaReverso.style.display = "none";
    }
}