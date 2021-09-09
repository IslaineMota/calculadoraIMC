const form = document.querySelector('#formulario');

/* Opção 1 
const interromper = function (e) {
    e.preventDefault();
    console.log ('interromper');    
};
 */
/* OPÇÃO 2
const interromper =  (e) => {
    e.preventDefault();
    console.log ('interromper');
}; */
//form.addEventListener('submit', interromper);

//import {setResultado} from './resultado.js';

form.addEventListener('submit', function (e) { 
    e.preventDefault();  
});
