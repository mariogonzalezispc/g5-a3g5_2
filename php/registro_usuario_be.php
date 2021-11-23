
<?php   

include 'conexion_be.php';//conexion a base de datos

/*
if ($conexion) {//Si la conexion es exitosa
        echo "Conexion exitosa !!!";//Mensaje de conexion exitosa
    }else{//Si la conexion no es exitosa
        echo "Conexion fallida";//Mensaje de conexion fallida
  */  


$nombre=$_POST['nombre'];//recibimos el nombre
$apellido=$_POST['apellido'];//recibimos el apellido
$email=$_POST['email'];//recibimos el email
$pass1=$_POST['clave1'];//recibimos la clave
$pass2=$_POST['clave2'];//recibimos la clave


//$insertar="INSERT INTO usuario (nombre, apellido, email, clave) 
$insertar="INSERT INTO`usuario`(`usuario`,`clave`)VALUES (NULL,'$nombre','$pass1','1','1')";//insertamos los datos en la tabla usuarios


$ejecutar = mysqli_query($conexion, $insertar);//conectamos y ejecutamos la consulta




?>