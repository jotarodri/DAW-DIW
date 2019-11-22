/*

This Script is licensed under GPL v3 or higher

Author: Angel Berlanas Vicente
email : <berlanas_ang@gva.es>

*/

async function startMigration(){

    let dataSteps = document.querySelectorAll('[data-step]');
    document.querySelector("button").removeEventListener("click", startMigration);

    for (let i = 0; i < dataSteps.length; i++) {

        dataSteps[i].classList.add("estabaEscondido");

        if (dataSteps[i].localName == 'progress') {
            
            for (let index = 0; index <= 100; index++) {
                
                dataSteps[i].value=index;

                let promesa = await megaPromesa(10);
                
            }

        }
        
        //dataSteps[i].addEventListener("transitionend", startMigration); 
   }

}

function megaPromesa(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 50);
    });
}

function init(){
    console.info(" * Init envirnoment ");

    // Set click function on button
    document.querySelector("button").addEventListener("click",startMigration);

   
}

// Init the environment when all is ready
window.onload=init;
