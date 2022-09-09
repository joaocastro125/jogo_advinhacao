// @ts-nocheck
// @ts-nocheck.
let tentativas = 3
function Chutar() {

    let resultado = document.querySelector("#resultado");
    let chute = Number(document.querySelector("#valor").value);

    let numeroSecrect = parseInt(Math.random() * 11);


    if (chute == numeroSecrect) {
        resultado.innerHTML = " acertou!"

    }
    else if (chute < numeroSecrect && numeroSecrect > 10) {
        resultado.innerHTML = " o numero é menor que o chutado";

    }
    else if (chute > numeroSecrect && numeroSecrect < 10) {
        resultado.innerHTML = " o numero é maior que o chutado";
    }
    else if (chute > 10 || numeroSecrect < 0) {
        resultado.innerHTML = "deve digitar de 0 a 10:";
    }
    else if (chute) {
        resultado.innerHTML = " esgotou o numero de tentativas , tente novamente ";


    }



    else {
        resultado.innerHTML = "Errou , e o numero secreto é :" + numeroSecrect;
    }
}

tentativas -= 1