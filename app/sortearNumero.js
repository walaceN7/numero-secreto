const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * (maiorValor - menorValor + 1) + menorValor);
}

console.log(numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;