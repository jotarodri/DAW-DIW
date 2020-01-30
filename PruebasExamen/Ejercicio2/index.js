
function init(){

  let url = new URL('http://192.168.4.92/rest-get.php');
  let data = {nombre: 'Angel'};
  url.search = new URLSearchParams(data).toString();
  
fetch(url, {
  method: 'GET', // or 'PUT'
  //body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
}

window.addEventListener('load', init);