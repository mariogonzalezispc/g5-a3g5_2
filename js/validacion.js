//-----------------------------------------------------------------------------------
//Validacion del formulario registro
//-----------------------------------------------------------------------------------


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
            //entrar=true;
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
    if(entrar==true){
        parrafo.innerHTML=error_1;
    }

});



