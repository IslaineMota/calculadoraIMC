const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) { 
    e.preventDefault();  
    const inputHeight = e.target.querySelector('#altura');
    const inputWeight = e.target.querySelector('#peso');

    const acceptCommaHeight = String(inputHeight.value).replace(',','.');
    const height = Number(acceptCommaHeight);
    const acceptCommaWeight = String(inputWeight.value).replace(',','.');
    const weight = Number(acceptCommaWeight);
    
    if (!height) {
        setResultado('Altura inválida.');
        return;
    }

    if (!weight) {
        setResultado('Peso inválido.');
        return;
    }

    const getImc = imcCalculation(height, weight);
    const getRang = rangImc(getImc);
    const messageResult = `Seu IMC é de ${getImc} e você está com ${getRang}. `;

    setResultado(messageResult);

});

const creatParagraph = (text) => {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    return paragraph;
};

function setResultado(text) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';    
    const getParagraph = creatParagraph(text)
    resultado.appendChild(getParagraph); 
};

function imcCalculation(altura, peso){
    const imc = peso / altura**2;
    return imc.toFixed(2);
};

function rangImc(getImc) {
    const rang = ['o peso abaixo do normal', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];

    if (getImc >= 39.9 ) {
        return rang[5];
    }
    if (getImc >= 34.9 ) {
        return rang[4];
    }
    if (getImc >= 29.9 ) {
        return rang[3];
    }
    if (getImc >= 24.9 ) {
        return rang[2];
    }
    if (getImc >= 18.5 ) {
        return rang[1];
    }
    if (getImc < 18.5 ) {
        return rang[0];
    }
}


