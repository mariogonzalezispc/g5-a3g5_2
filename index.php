<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login IEFI_BD</title>
    <link rel="stylesheet" href="./css/estilos.css">
</head>
<body>
  
<main>
    <div class="contenedor__todo">
        <div class="caja__trasera">
<!--------------------------------------------------------------------------->            
            <div class="caja__trasera_login">
                <h3>¿Ya tiene cuenta?</h3>
                <p>Inicia sesion para entrat en la pagina</p>
                <button id="btn__iniciar-sesion">Iniciar sesion</button>
            </div>
<!--------------------------------------------------------------------------->            
            <div class="caja__trasera_registro">
                <h3>¿Aun no tiene una cuenta?</h3>
                <p>Registrate para que puedas iniciar sesion</p>
                <button id="btn__registrarse">Registrarse</button>
            </div>
<!--------------------------------------------------------------------------->
        </div>

 <!--------------------------------------------------------------------------->
 <!--formulario iniciar sesion-->
 <!--------------------------------------------------------------------------->
        <div class="contenedor__login-registro">
            <form action="" class="formulario__login">
                <h2>Iniciar sesion</h2>
                <input type="text" placeholder="Correo electronico" required> 
                <input type="password" placeholder="Contraseña"required >
                <button>Iniciar sesion</button>  
            </form>
 <!--------------------------------------------------------------------------->
 <!--formulario registro-->
 <!--------------------------------------------------------------------------->
            <form class="formulario__registro" action="conexion_be.php" method="post">
                <h2>Registrarse</h2>
                <input type="text" placeholder="Nombre" name="nombre" required> 
                <input type="text" placeholder="Apellido" name="apellido" required> 
                <input type="text" placeholder="Correo electronico" name="email" required> 
                <input type="password" placeholder="Contraseña" name="clave1" required> 
                <input type="password" placeholder="Repetir contraseña" name="clave2" required> 
                <button>Registrarse</button>
            </form>
        </div>
 <!--------------------------------------------------------------------------->
     </div>
</main>
    <script src="./js/script.js"></script>
</body>
</html>