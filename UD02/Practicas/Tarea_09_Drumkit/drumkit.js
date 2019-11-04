
  const keys = document.querySelectorAll('.key');
    
    keys.forEach(key => key.addEventListener('transitionend',eliminarTransicion));
    window.addEventListener("keydown", reproducirSonido);

function reproducirSonido(e) {

    let caja = document.querySelector(`div[data-key="${e.keyCode}"]`);
    caja.classList.add("transicion");

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play();
}

function eliminarTransicion(e) {
    e.target.classList.remove("transicion");
}
