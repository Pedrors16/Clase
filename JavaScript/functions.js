//Escucha que se haga clic en los elementos con los IDs indicados entre paréntesis. Cuando sucede, invoca a la función de la derecha del igual.
document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;


//Cambia la fuente y el fondo de pantalla
function switchGray(){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
}
function switchWhite(){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
  document.getElementsByTagName('body')[0].style.color = 'black';
}

function switchBlue(){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
  document.getElementsByTagName('body')[0].style.color = 'white';
}

//Añade el código necesario para que al pulsar el botón amarillo el fondo sea amarillo y la fuente verde. 