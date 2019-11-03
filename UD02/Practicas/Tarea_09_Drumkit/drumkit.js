

window.onload = function(){
    const keys = document.querySelectorAll(".key");
    window.addEventListener("keydown", reproducirSonido);
    keys.forEach(key => key.addEventListener("transitionend", eliminarTransicion));
        
}

function reproducirSonido(e) {

    let caja = document.querySelector(`div[data-key="${e.keyCode}"]`);
    caja.classList.add("transicion");

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play();
}

function eliminarTransicion(e) {
    console.log("Holi");
    e.target.classList.remove("transicion");
}


