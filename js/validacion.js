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
    var error_n = document.getElementById("error_nombres");
    var name = document.getElementById('nombres').value;
    var ape = document.getElementById('apellidos').value;
    var dni = document.getElementById('dni').value;
    var fechaN = document.getElementById('fecha_n').value;
    var tel = document.getElementById('telefono').value;
    var correo = document.getElementById('email').value;
    var clave1 = document.getElementById('clave1').value;
    var clave2 = document.getElementById('clave2').value;

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
    if (ape.length < 3) {
        if (ape.length == 0) {
            alert('No has escrito nada en el apellido');
            return;
        } else {
            alert('El apellido debe tener al menos tres letras');
            return;
        }
    }
    if (dni.length < 7) {
        if (dni.length == 0) {
            alert('No has escrito tu DNI');
            return;
        } else {
            alert('El DNI debe tener al menos siete numeros');
            return;
        }
    }
    /*------------------------------------------------------------------------------------*/
        var hoy = new Date();
        var cumpleanos = new Date(fechaN);
        console.log(cumpleanos);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        if(edad <= 18){
            alert("Eres menor de edad :( ");
        }
    /*------------------------------------------------------------------------------------*/
    if(!regexEmail.test(email.value)){
        alert('Formato de correo incorrecto');
    }
     if (clave1.length < 6) {
        alert('La clave debe tener al menos 6 caracteres');
        return;
    }
    if (clave2.length<6 || clave2 != clave1) {
        alert('Repita las dos contraseñas no estan iguales');
        return;
    }
    this.submit();
}
