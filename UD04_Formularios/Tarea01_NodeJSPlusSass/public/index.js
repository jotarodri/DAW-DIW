function passarAmayus(){
    document.querySelector('input[type="text"]').value = document.querySelector('input[type="text"]').value.toUpperCase();
    buscarResultados();
}

function filtrarCalle(cadena){
    let valorTexto = document.querySelector('input[type="text"]').value;
    return cadena.properties.direccion.toUpperCase().startsWith(valorTexto);
}


function buscarResultados() {

fetch('http://mapas.valencia.es/lanzadera/opendata/Tra-aparcamientos/JSON')
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
    
    console.log(myJson);

    const filtro = myJson.features.filter(filtrarCalle);

    let tabla = document.createElement("table");

let contador = 1;
    filtro.forEach(aparcamiento => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerText = "Nombre Aparcamiento: "+aparcamiento.properties.nombre +" Calle: "+aparcamiento.properties.direccion+ " Plazas: "+ aparcamiento.properties.plazastota;
        tr.appendChild(td);
        tabla.appendChild(tr);
     contador++;
    });

    document.querySelector(".resultado").innerHTML="";
    document.querySelector(".resultado").appendChild(tabla);
});

}

function init() {

    document.querySelector('input[type="text"]').addEventListener("input",passarAmayus);
    document.querySelector('input[type="button"]').addEventListener("click",buscarResultados);

}



window.onload = init;