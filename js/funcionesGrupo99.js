
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

//-----------------------------------------------------------------------------------
//segunda funcion DOM del sitio trabaja sobre el NAVBAR expandiendo o colapsando menu
//-----------------------------------------------------------------------------------
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelectorAll(".nav-menu");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("nav-menu__visible");
});
