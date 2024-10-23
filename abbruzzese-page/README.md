# GrupoAbbruzzese
Pagina web Grupo Abbruzzese

Pagina desarrollada con 

Frontend:
            -React 
            -Material UI
            -TypeScript 

Backend:
            -Java 21
            -Maven 3.9 o superior
            -Spring Boot
            -SGBD=>MySQL

Esta pagina en desarrollo cuenta con:

-Implementacion de una clave alfanumerica aleatoria mediante UUID

-Api backend en java 21 con maven con conexion a bdmysql

-Usa el patron dto para no mostrar directamente el objeto almacenado en la bd sino un clon del mismo
tiene configurado cors para permitir peticiones del frontend

-Ademas tiene configurado para mandar un email si el usuario perdio su contraseña obviamente si el usuario ingreso un email que se encuentra en la base de datos

-En este email se manda la direccion con la pagina para actualizar la contraseña

-Si la contraseña se actualizo correctamente redirije al login

-Cuenta con validaciones mediante expresiones regulares tanto en el formulario de registro de usuario
como en el login y en actualizar contraseña

-Tambien contiene un la implementacion se security config para validar la contraseña del usuario que se almacena hasheada con el texto plano que se ingreso todo esto mediante password encoder utilizando BCrypt
esto se utiliza en el login 

-Para controlar la sesion se utiliza un jwt que se genera cuando el usuario se logueo correctamente
ademas tiene controles para que si el usuario no esta logueado no pueda acceder a ciertas paginas y si el usuario esta logueado no pueda acceder a los formularios de registro recuperacion e inicio de sesion 

-Si el usuario consigue loguearse se almacenan sus datos y si la session expiro(lo cual es razonable porque se le da 10 horas de validez al jwt que se genera con el inicio de sesion) y sigue navegando dentro de la pagina se cargan sus datos de usuario y password porque estos fueron almacenados solo si se marco el checkbox Recuerdame

-Las paginas son responsivas y se adaptan segun el tamaño del dispositivo con el cual son visitadas
el frontend es capaz de enviar peticiones al backend para crear usuario enviar email actualizar contraseña y generar jwt si las credenciales de inicio de sesion son correctas
 
 -Cuenta con slides que redirijen a otras paginas de la aplicacion 

 -Cuenta con una implementacion de un mapa de google maps donde se muestra la localizacion de la empresa

 -Ademas este mapa tiene agregado un marcador con la ubicacion de la empresa

 -Cuenta con imagenes de redes sociales que contienen links a las diferentes redes sociales de la empresa