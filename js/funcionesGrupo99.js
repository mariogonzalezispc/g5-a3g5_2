
//-----------------------------------------------------------------------------------
//primera funcion DOM del sitio trabaja sobre el NAVBAR colocando fecha y hora actual
//-----------------------------------------------------------------------------------
showTime();

function showTime(){
fecha = new Date();//instancio objeto Date con fecha 
hora = fecha.getHours();//obtengo hora actual
minutos = fecha.getMinutes();//obtengo minutos actual
segundos = fecha.getSeconds();//obtengo segundos actual
dia = fecha.getDate();//obtengo dia actual
mes = fecha.getMonth()+1;//obtengo mes actual
anio = fecha.getFullYear();//obtengo año actual

if (hora < 10) hora = 0 + hora;//si hora es menor a 10 le agrego un 0 al inicio
if (minutos < 10) minutos = "0" + minutos;//si minutos es menor a 10 le agrego un 0 al inicio
if (segundos < 10) segundos = "0" + segundos;//si segundos es menor a 10 le agrego un 0 al inicio

$("#hora").text(hora+ ":" +minutos+ ":" +segundos);//muestro hora actual en el h1 id hora
$("#dia").text(dia+ "/" +mes+ "/" +anio);//muestro dia actual en el h1 id dia
setTimeout("showTime()", 1000);//llamo a la funcion showTime cada segundo para ser tiempo real
}

//-----------------------------------------------------------------------------------
//funcion DOM del sitio trabaja sobre el NAVBAR expandiendo o colapsando menu
//-----------------------------------------------------------------------------------
function mi_Menu() {
  //const navToggle = document.querySelector(".nav-toggle"); //obtengo el elemento nav-toggle
  const navMenu = document.querySelector(".nav-menu"); //obtengo el elemento nav-menu
  navMenu.classList.toggle("nav-menu__visible");
  //si el elemento nav-menu tiene la clase nav-menu__visible la quito y si no la agrego
}

//-----------------------------------------------------------------------------------
//Validacion de la edad del usuario
//-----------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------
//Envio por metodo get a otro formulario cointacto a otro formulario
//-----------------------------------------------------------------------------------
function mi_Envio(url, ubicacion) {
  document.getElementById("5").value =
    "°" +
    document.getElementById("1").value +
    "°" +
    document.getElementById("2").value +
    "°" +
    document.getElementById("3").value +
    "°" +
    document.getElementById("4").value +
    "°";
  window.open(url + '?payload=' + document.getElementById('5').value, ubicacion, 'width=870,height=700'); // return false;
  direccionar();
}

function direccionar() {
  window.location("");
}



/*
  alert("Enviado");
  document.getElementById("nombres").setAttribute("readonly", "readonly"); //input nombres se pone en modo solo lectura
  document.getElementById("email").setAttribute("readonly", "readonly"); //input email se pone en modo solo lectura
  document.getElementById("telefono").setAttribute("readonly", "readonly"); //input telefono se pone en modo solo lectura
  document.getElementById("mensaje").setAttribute("readonly", "readonly"); //input mensaje se pone en modo solo lectura
}*/
//-----------------------------------------------------------------------------------
//Envio por metodo get a otro formulario cointacto a otro formulario
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
//funcion DOM filtra componentes de la lista
//-----------------------------------------------------------------------------------
function borra() {//funcion para borrar los componentes que se muestran
  var x, i;
  x = document.querySelectorAll(".led,.dis, .tra, .ser");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
function todo() {//funcion para mostrar todos los componentes
  var x, i;
  x = document.querySelectorAll(".led,.dis, .tra, .ser");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "flex";
  }
}
function leds() {//funcion para mostrar los componentes led
  borra();
  var x, i;
  x = document.querySelectorAll(".led");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "flex";
  }
}
function disp() {//funcion para mostrar los componentes display
  borra();
  var x, i;
  x = document.querySelectorAll(".dis");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "flex";
  }
}
function tran() {//funcion para mostrar los componentes transistores
  borra();
  var x, i;
  x = document.querySelectorAll(".tra");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "flex";
  }
}
function serv() {//funcion para mostrar los componentes transistores
  borra();
  var x, i;
  x = document.querySelectorAll(".ser");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "flex";
  }
}