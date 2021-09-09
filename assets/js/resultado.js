import {p} from './criar-paragrafo.js';
//const {p} = require('./criar-paragrafo.js');
export function setResultado() {
    alert ("Testando resposta");
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';    
    resultado.appendChild(p('teste')); 
};

























/* OUTRO MODO DE SE FAZER
let setResultado = (msg) => {
    setResultado = document.querySelector('#resultado');
    setResultado.innerHTML= `<p>${msg}</p>`
};
setResultado ('deu certo novamente!'); */