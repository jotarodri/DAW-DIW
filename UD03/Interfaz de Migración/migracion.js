

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
        
    
   }
   dataSteps[i].addEventListener("transitionend", startMigration); 
}

function megaPromesa(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 50);
    });
}

function init(){
    document.querySelector("button").addEventListener("click",startMigration);   
}


window.onload=init;


