// variables 
const btnEnviar = document.querySelector('#enviar');
const referencia = document.querySelector('#enviar-mail');

// variables para campos 
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListeners();
function eventListeners(){
     document.addEventListener('DOMContentLoaded', iniciarApp);

     //campos del formulario
     email.addEventListener('blur', validarFormulario);
     asunto.addEventListener('blur', validarFormulario);
     mensaje.addEventListener('blur', validarFormulario);
}


//Funciones 
function iniciarApp(){
     btnEnviar.disabled = true;
     btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e){
     if(e.target.value.length > 0){
          //e.target.classList.remove('border', 'border-red-500');

          
     } else {
          // e.target.style.borderBottomColor = red;  // se puede poner un style directamente o 
          e.target.classList.add('border', 'border-red-500');

          mostrarError('Todos los campos son obligatorios');
     }
     if(e.target.type === 'email'){
          const resultado = e.target.value.indexOf('@');
          if(resultado < 0){
               mostrarError('No es un correo valido!!');
          }

     }
}

function mostrarError(mensaje){
     const mensajeError = document.createElement('p');
     mensajeError.textContent = mensaje;
     // mensajeError.innerHTML = `<p class="border">Error campo vacio</p>`; // asi tambien se podia crear el p
     mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');
     
     const errores = document.querySelectorAll('.error');

     if(errores.length === 0){
          referencia.appendChild(mensajeError);
     }


     

}
