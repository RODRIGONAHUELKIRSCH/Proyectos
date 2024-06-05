// function validaNumerico(){
//     var inputtxt = document.getElementById('#dni-input'); 
//     var valor = inputtxt.value;
//     for(i=0;i<valor.length;i++){
//         var code=valor.charCodeAt(i);
//             if(code<=48 || code>=57){          
//               inputtxt.value=""; 
              
//             }    
//       }
     
//    }

//    function validaNumericos(event) {
//     if(event.charCode >= 48 && event.charCode <= 57){
//       return true;
//      }
//      return false;        
// }


var face = document.getElementById("face");
 if (face) {
   face.addEventListener("click", function () {
    window.open("https://www.facebook.com/profile.php?id=100063680156866");
   });
 }

var ins = document.getElementById("ins");
if (ins) {
  ins.addEventListener("click", function () {
    window.open(
      "https://www.instagram.com/hecho.a.mano_lukycreaciones/"
    );
  });
}

var contador = true;
function vista() {
    var texto = document.getElementById("verPassword");
    if (contador == true) {
        texto.className = "fas fa-eye-slash verPassword";
        document.getElementById("password").type="text";
        contador=false;
    } else {
        texto.className = "fas fa-eye verPassword";
        document.getElementById("password").type="password";
        contador = true;
    }
}

var contador2 = true;
function vista2() {
    var texto = document.getElementById("verPassword2");
    if (contador2 == true) {
        texto.className = "fas fa-eye-slash verPassword2";
        document.getElementById("password2").type="text";
        contador2=false;
    } else {
        texto.className = "fas fa-eye verPassword2";
        document.getElementById("password2").type="password";
        contador2 = true;
    }
}

const formulario = document.getElementById('formulario');
const inputs  = document.querySelectorAll('input');



const expresiones ={
  nombre:/^[a-zA-ZÀ-ÿ\s]{3,12}$/,
  apellido:/^[a-zA-ZÀ-ÿ\s]{3,20}$/,
  password:/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,24}$/, //Al menos un numero , una letra mayuscula, minuscula, caracter especial longitud minima 8 caracteres
  correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  direccion:/^[a-zA-Z0-9 ]{4,26}$/,
  telefono: /^\d{10,14}$/,
  dni:/^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/
}

const campos={

	nombre: false,
  apellido: false,
	password: false,
	email: false,
  direccion:false,
	telefono: false,
  dni:false

}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "email":
			validarCampo(expresiones.correo, e.target, 'email');
		break;
    case "direccion":
			validarCampo(expresiones.direccion, e.target, 'direccion');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
    case "dni":
			validarCampo(expresiones.dni, e.target, 'dni');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .input_incorrecto`).classList.remove('input_incorrecto-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .input_incorrecto`).classList.add('input_incorrecto-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .input_incorrecto`).classList.add('input_incorrecto-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .input_incorrecto`).classList.remove('input_incorrecto-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {

	if(campos.nombre && campos.apellido && campos.password && campos.email && campos.telefono && campos.direccion && campos.dni){

		document.getElementById('cuenta_creada').classList.add('cuenta_creada-activo');
		setTimeout(() => {
			document.getElementById('cuenta_creada').classList.remove('cuenta_creada-activo');
		}, 7000);
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
		icono.classList.remove('formulario__grupo-correcto');
		});

	} else {

		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 5000);

	}
});

// ---  Otra forma de validar el ingreso de solo numericos ---
// onload = function(){ 
//     var ele = document.querySelectorAll('#dni-input')[0];
//     ele.onkeypress = function(e) {
//        if(isNaN(this.value+String.fromCharCode(e.charCode)))
//           return false;
//     }
//     ele.onpaste = function(e){
//        e.preventDefault();
//     }
//   }