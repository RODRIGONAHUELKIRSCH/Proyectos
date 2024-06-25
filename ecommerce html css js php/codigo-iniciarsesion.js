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
        document.getElementById("password-text").type="text";
        contador=false;
    } else {
        texto.className = "fas fa-eye verPassword";
        document.getElementById("password-text").type="password";
        contador = true;
    }
}
// var contador = true;
// function vista() {
//     var texto = document.getElementById("verPassword");
//     if (contador == true) {
//         texto.className = "fas fa-eye-slash verPassword";
//         document.getElementById("password-text").type="text";
//         contador=false;
//     } else {
//         texto.className = "fas fa-eye verPassword";
//         document.getElementById("password-text").type="password";
//         contador = true;
//     }
// }

// var btngoogle = document.getElementById("btniniciargoogle");
// if (btngoogle) {
//   ins.addEventListener("click", function () {
//     window.open(
//       "paginadelaapidegooglepara iniciar sesion con gmail"
//     );
//   });
// }
  

// var cerrar=document.querySelectorAll(".close")[0];
// var abrir=document.querySelectorAll(".btniniciarsesion")[0];
// var modal=document.querySelectorAll(".modal")[0];
// var modalcont=document.querySelectorAll(".modal-container")[0];


// abrir.addEventListener("submit",function(e){

//       e.preventDefault();
//       modalcont.style.opacity="1";
//       modalcont.style.visibility="visible";
//       modal.classList.toggle("modal-close")
    
//   });

  // cerrar.addEventListener("click",function(e){
  //   modal.classList.toggle("modal-close")
  // setTimeout(function(){
  //   modalcont.style.opacity="0";
  //   modalcont.style.visibility="hidden";
  //   location.reload();
  // },800)
  
  // });
  
  // if(email_inicio.innerHTML ==undefined&& password_inicio.value ==undefined){
    
  //   var modal_text=document.getElementsByClassName(".modal-text").innerHTML="No esta permitido los campos vacios.";


 
  //   console.log("dentro de if funcion "+email_inicio.innerText+"  "+password_inicio.innerText)

  // }
  // else if(email_inicio.innerHTML!=undefined&& password_inicio.innerHTML!=undefined){

  //   modalcont.style.opacity="1";
  //   modalcont.style.visibility="visible";
  
  //   modal.classList.toggle("modal-close")
  //   console.log("dentro de elseif funcion"+email_inicio+"  ")
  // }

// con dialog
// const openModal = document.querySelector('.btniniciarsesion');
// const modal = document.querySelector('#modal-succes');
// const closeModal = document.querySelector('.modal-close');

// openModal.addEventListener('click', (e)=>{
//     e.preventDefault();
//     modal.showModal();
// });

// closeModal.addEventListener('click', (e)=>{
//     modal.close();
// });