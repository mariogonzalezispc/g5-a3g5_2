//-----------------------------------------------------------------------------------
//puesta en fecha actual del input data
//-----------------------------------------------------------------------------------
window.onload = function(){
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    document.getElementById('fecha_n').value=ano+"-"+mes+"-"+dia;
  }
//-----------------------------------------------------------------------------------
//Validacion del formulario registro
//-----------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form_registro").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();

    var name = document.getElementById('nombres').value;//capturo value del input nombre
    var ape = document.getElementById('apellidos').value;//capturo value del input apellido
    var dni = document.getElementById('dni').value;//capturo value del input dni
    var fechaN = document.getElementById('fecha_n').value;//capturo value del input fecha nacimiento
    var correo = document.getElementById('email').value;//capturo value del input correo  
    var clave1 = document.getElementById('clave1').value;//capturo value del input clave1
    var clave2 = document.getElementById('clave2').value;//capturo value del input clave2

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//creo una variable para la expresion regular

    if (name.length < 3) {//si el nombre es menor a 3
        if (name.length == 0) {//si el nombre es igual a 0
            alert('No has escrito nada en el nombre');//muestro un mensaje
            return;//salgo del evento submit y lo interrumpo por completo 
        } else {//  
            alert('El nombre debe tener al menos tres letras');//muestro un mensaje
            return;//salgo del evento submit y lo interrumpo por completo 
        }
    }
    if (ape.length < 3) {
        if (ape.length == 0) {
            alert('No has escrito nada en el apellido');
            return;//salgo del evento submit y lo interrumpo por completo
        } else {
            alert('El apellido debe tener al menos tres letras');
            return;//salgo del evento submit y lo interrumpo por completo 
        }
    }
    if (dni.length < 7) {
        if (dni.length == 0) {
            alert('No has escrito tu DNI');
            return;//salgo del evento submit y lo interrumpo por completo
        } else {
            alert('El DNI debe tener al menos siete numeros');
            return;//salgo del evento submit y lo interrumpo por completo
        }
    }
    /*------------------------------------------------------------------------------------*/
    var hoy = new Date();
    var cumpleanos = new Date(fechaN);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    if (edad <= 18) {
        alert("Eres menor de edad :( ");
    }
    /*------------------------------------------------------------------------------------*/
    if (!regexEmail.test(email.value)) {
        alert('Formato de correo incorrecto');
    }
    if (clave1.length < 6) {
        alert('La clave debe tener al menos 6 caracteres');
        return;
    }
    if (clave2.length < 6 || clave2 != clave1) {
        alert('Repita las dos contraseñas no estan iguales');
        return;
    }
    this.submit();
}






//-----------------------------------------------------------------------------------
//Validacion del formulario registro
//-----------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form__contacto").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var name = document.getElementById('nombres').value;
    var correo = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name.length < 3) {
        if (name.length == 0) {
            alert('No has escrito nada en el nombre');
            return;
        } else {
            alert('El nombre debe tener al menos tres letras');
            return;
        }
    }
    if(!regexEmail.test(email.value)){
        alert('Formato de correo incorrecto');
    }

    if (mensaje.length < 5) {
        if (mensaje.length == 0) {
            alert('No has escrito nada en el mensaje');
            return;
        } else {
            alert('El mensaje debe tener al menos cinco letras');
            return;
        }
    }

    this.submit();
}
