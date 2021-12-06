
//-----------------------------------------------------------------------------------
//funcion DOM del sitio trabaja sobre el NAVBAR colocando fecha y hora actual
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
function mi_Menu() {//funcion para expandir o colapsar menu
  const navMenu = document.querySelector(".nav-menu"); //obtengo el elemento nav-menu
  navMenu.classList.toggle("nav-menu__visible");
  //si el elemento nav-menu tiene la clase nav-menu__visible la quito y si no la agrego
}
function mi_Menu2() {//funcion para expandir o colapsar menu
  const navMenu2 = document.querySelector(".category_list"); //obtengo el elemento nav-menu
  navMenu2.classList.toggle("category_list__visible");
  //si el elemento nav-menu tiene la clase nav-menu__visible la quito y si no la agrego
}


//-----------------------------------------------------------------------------------
//Validacion de la edad del usuario
//-----------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------
//Envio por metodo get a formulario contacto1 los valores cargados en contacto
//-----------------------------------------------------------------------------------
function mi_Envio(url, ubicacion) {//funcion para enviar los datos del formulario
  document.getElementById("5").value =//cargo en input 5 hidden el valos de los 4 inputs
    "°" +//declaro una bandera para saber a donde empieza input
    document.getElementById("1").value +//cargo en input 5 hidden el valor del input 1
    "°" +//declaro una bandera para saber a donde empieza y termina cada input
    document.getElementById("2").value +//cargo en input 5 hidden el valor del input 2
    "°" +//declaro una bandera para saber a donde empieza y termina cada input
    document.getElementById("3").value +//cargo en input 5 hidden el valor del input 3
    "°" +//declaro una bandera para saber a donde empieza y termina cada input
    document.getElementById("4").value +//cargo en input 5 hidden el valor del input 4
    "°";//declaro una bandera para saber a donde termina cada input
  window.open(url + '?payload=' + document.getElementById('5').value, ubicacion, 'width=870,height=700'); // return false;
  direccionar();
}

function direccionar() {//funcion para direccionar a la pagina de contacto1
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
  x = document.querySelectorAll(".led,.dis, .tra, .ser, .gra");//obtengo todos los componentes
  for (i = 0; i < x.length; i++) {//recorro todos los componentes
   x[i].style.display = "none";//oculto los componentes
  }
}
function todo() {//funcion para mostrar todos los componentes
  var x, i;
  x = document.querySelectorAll(".led,.dis, .tra, .ser, .gra");//obtengo todos los componentes
  for (i = 0; i < x.length; i++) {//recorro todos los componentes
    x[i].style.display = "flex";//muestro los componentes
  }
}
function leds() {//funcion para mostrar los componentes led
  borra();//borro los componentes
  var x, i;
  x = document.querySelectorAll(".led");//obtengo los componentes led
  for (i = 0; i < x.length; i++) {//recorro los componentes 
    x[i].style.display = "flex";//muestro los componentes led
  }
}
function disp() {//funcion para mostrar los componentes display
  borra();//borro los componentes
  var x, i;
  x = document.querySelectorAll(".dis");//obtengo los componentes display
  for (i = 0; i < x.length; i++) {//recorro los componentes
    x[i].style.display = "flex";//muestro los componentes display
  }
}
function tran() {//funcion para mostrar los componentes transistores
  borra();//borro los componentes
  var x, i;
  x = document.querySelectorAll(".tra");//obtengo los componentes transistores
  for (i = 0; i < x.length; i++) {//recorro los componentes
    x[i].style.display = "flex";//muestro los componentes transistores
  }
}
function serv() {//funcion para mostrar los componentes transistores
  borra();//borro los componentes
  var x, i;
  x = document.querySelectorAll(".ser");//obtengo los componentes servidores
  for (i = 0; i < x.length; i++) {//recorro los componentes
    x[i].style.display = "flex";//muestro los componentes servidores
  }
}
function gral() {//funcion para mostrar los componentes transistores
  borra();//borro los componentes
  var x, i;
  x = document.querySelectorAll(".gra");//obtengo los componentes generales
  for (i = 0; i < x.length; i++) {//recorro los componentes
    x[i].style.display = "flex";//muestro los componentes generales
  }
}