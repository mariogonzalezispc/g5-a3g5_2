//-----------------------------------------------------------------------------------
//Validacion del formulario registro
//-----------------------------------------------------------------------------------
/*
const form = document.getElementById("form_registro");
const parrafo = document.getElementById("error_1");
const nombre = document.getElementById("nombres");
const apellido = document.getElementById("apellidos");
const dni= document.getElementById("dni");
const fechaNacimiento = document.getElementById("fn");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const clave1 = document.getElementById("clave1");
const clave2 = document.getElementById("clave2");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let error_1="";
    let entrar=false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML="";

    if(nombre.value.lenght <3){
            error_1+='El campo nombre es obligatorio';
            entrar=true;
    }
/*


    
    if(apellido.value=="" || apellido.value.lenght<3){
        //error_1+="El apellido es muy corto <br>";
       entrar=true;
   }
    /*
    if(!regexEmail.test(email.value)){
        error_1+='El email no es valido <br>';
        entrar=true;
    }*/
 /*   if(entrar==true){
        parrafo.innerHTML=error_1;
    }

});*/


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form_registro").addEventListener('submit', validarFormulario); 
  });
  

  function validarFormulario(evento) {
    evento.preventDefault();
    var error_n = document.getElementById("error_nombres");
    var name = document.getElementById('nombres').value;
    var ape = document.getElementById('apellidos').value;  
    var dni = document.getElementById('dni').value;
    var fechaN = document.getElementById('fn').value;  
    var tel = document.getElementById('telefono').value;  
    var correo = document.getElementById('email').value; 
    var clave1 = document.getElementById('clave1').value;
    var clave2 = document.getElementById('clave2').value;   

  
    if (name.length == 0) {
        alert('No has escrito nada en el nombre');
        //$("error_nombres").val('30');
        //document.getElementById(error_nombres).value="hola";
        //document.form_registro.error_nombres.value = "30";
       // error_n.innerHTML="hola";
        return;
    }
    if (name.length < 3) {
        alert('El nombre debe terner al menos tres letras');
        return;
    }
    if (ape.length == 0) {
        alert('No has escrito nada en el nombre');
        return;
    }
    if (ape.length < 3) {
        alert('El apellido debe terner al menos tres letras');
        return;
    }
    if (dni.length == 0) {
        alert('No has escrito nada en el nombre');
        return;
    }
/*------------------------------------------------------------------------------------*/





/*------------------------------------------------------------------------------------*/

    if (clave1.length < 6) {
      alert('La clave debe tener al menos 6 caracteres');
      return;
    }

    if (clave1!=clave2) {
        alert('Repita las dos claves');
        return;
      }
  











    this.submit();
}
