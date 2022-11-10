const calcular = document.getElementById('bttn-calcular');


function calculo () {

    const nome = document.getElementById('input-nome').value;
    const altura = document.getElementById('input-altura').value;
    const peso = document.getElementById('input-peso').value;
    let resultado = document.getElementById('response');

    if(nome == '' || altura == '' || peso == ''){
        resultado.textContent = 'Preencha todos os campos!'
    }else{
        const calculo = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';

        if(calculo < 18.5){
            classificacao = 'abaixo do peso.'
        }else if (calculo < 25){
            classificacao = 'com peso ideal.'
        }else if (calculo < 30){
            classificacao = 'levemente acima do peso.'
        }else if (calculo < 35){
            classificacao = 'com obesidade Grau I.'
        }else if (calculo < 40){
            classificacao = 'com obesidade Grau II.'
        }else{
            classificacao = 'com obesidade Grau III.'
        }
        resultado.textContent = `${nome}, seu IMC é ${calculo} e você está ${classificacao}`;
    }
}
    
calcular.addEventListener('click', calculo);