/*

This Script is licensed under GPL v3 or higher

Author: Angel Berlanas Vicente
email : <berlanas_ang@gva.es>

*/

function startMigration(){

    let dataSteps = document.querySelectorAll('[data-step]');
    for (let i = 0; i < dataSteps.length; i++) {
        dataSteps[i].classList.add("noOculto");
        dataSteps[i].addEventListener("transitionend", )
        
    }
    //dataSteps.forEach(element => element.classList.add("noOculto"));
}

function init(){
    console.info(" * Init envirnoment ");

    // Set click function on button
    document.querySelector("button").addEventListener("click",startMigration);

   
}

// Init the environment when all is ready
window.onload=init;
