

window.onload = function(){
    window.addEventListener("keydown", pulsarTecla);
    document.querySelectorAll("div").forEach(element => {

        element.addEventListener("transitionend", eliminarTransicion);
        
    });
}

function pulsarTecla(e) {

    let caja = document.querySelector(`div[data-key="${e.keyCode}"]`);
    caja.classList.add("transicion");

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play();
}

function eliminarTransicion(e) {
    let caja = document.querySelector(`div[data-key="${e.keyCode}"]`);
    caja.target.classList.remove("transicion");
}


