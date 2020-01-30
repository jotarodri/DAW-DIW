function mostrarXML() {
    
  let url = 'http://192.168.4.77/rest-xml.php';

  fetch(url)
  .then(response =>{
    return response.text();
  })
  .then(xml => (new window.DOMParser()).parseFromString(xml, "text/xml"))

    .then(data=> {
      console.log(data)
    }
    )
}


function init() {
    mostrarXML();
}



window.onload = init;