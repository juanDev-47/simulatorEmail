// variables 
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn')
const referencia = document.querySelector('#enviar-mail');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

     // enviar email
     referencia.addEventListener('submit', enviarEmail);

     btnReset.addEventListener('click', resetearFormulario);
}


//Funciones 
function iniciarApp(){
     btnEnviar.disabled = true;
     btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e){
     if(e.target.value.length > 0){

          // elimina los erros 
          const error = document.querySelector('p.error');
          if(error){
               error.remove();
          }

          e.target.classList.remove('border', 'border-red-500');
          e.target.classList.add('border', 'border-green-500');

     } else {
          // e.target.style.borderBottomColor = red;  // se puede poner un style directamente o 
          e.target.classList.remove('border', 'border-green-500');
          e.target.classList.add('border', 'border-red-500');
          mostrarError('Todo campo es obligatorio');
     }

     if(e.target.type === 'email'){
          

          if(er.test( e.target.value)){
               const error = document.querySelector('p.error');
               if(error){
                    error.remove();
               }

               e.target.classList.remove('border', 'border-red-500');
               e.target.classList.add('border', 'border-green-500');
          } else {
               e.target.classList.add('border', 'border-red-500');

               mostrarError('Email no válido');
          }

     }

     if(er.test(email.value) !== '' && asunto.value !== '' && mensaje.value !== ''){
          btnEnviar.disabled = false;
          btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
     } else {
          btnEnviar.disabled = true;
          btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
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

function enviarEmail(e){
     e.preventDefault();

     // mostrar el espiner
     const spinner = document.querySelector('#spinner');
     spinner.style.display = 'flex';   

     // despues de 3 segundo acultar el spinner y mostrar el mensaje
     setTimeout(() =>{
          spinner.style.display = 'none';

          // mensaje se envio correctamente
          const parrafo = document.createElement('p');
          parrafo.textContent = 'El mensaje se envio correctamente';
          parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase')
          
          // inserta el parrafo antes del spinner
          referencia.insertBefore(parrafo, spinner);
          setTimeout(() => {
               parrafo.remove(); // eliminar el mensaje de exito

               resetearFormulario();
          },3000);
     } ,3000);

}

// funcion que recetea el formulario 

function resetearFormulario() {
     referencia.reset();

     iniciarApp();
}