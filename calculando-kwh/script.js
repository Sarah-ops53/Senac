// ENUNCIADO:

    // Vamos criar uma calculadora de conta de luz.
    // 1. Pergunte ao usuário (com prompt):
    //      - Quantidade de kWh consumidos (kILOWATTS HORA).
    //      - Tipo de cliente (Residencial, Comercial ou Industrial).
    // 2. Regras de preço:
    //      - Residencial = R$ 0.60 por kWh.
    //      - Comercial = R$ 0.75 por kWh.
    //      - Industrial = R$ 0.90 por kWh.
    // 3. Se o consumo for maior que 500 kWh:
    //      - Aplique um acréscimo de 15% do valor final.
    // 4. Exiba na tela:
    //      - Tipo de cliente.
    //      - Consumo informado.
    //      - Valor base (sem acréscimo).
    //      - Acréscimo (se houver).
    //      - Valor final (com acréscimo).

const kWh = Number(prompt (`Digite a quantidade de kWh consumido:`));
const tipoCliente = prompt (`Você é que tipo de cliente?`);

let valorKwh = 0;
if ( tipoCliente.toLowerCase() === `residencial` ){
    valorKwh = 0.60;
} else if (tipoCliente.toLowerCase() === `comercial`){
    valorKwh = 0.75;
} else if (tipoCliente.toLowerCase() === `industrial`){
    valorKwh = 0.90;
}

let valorBase = kWh * valorKwh;
let acrescimo = 0;
if(kWh > 500){
    acrescimo = valorBase * 0.15;
}

let valorFinal = valorBase + acrescimo;

document.body.innerHTML += `<h2> Conta de Luz </h2> <br>
Tipo de Cliente: ${tipoCliente} <br>
Consumo Informado: ${kWh} kWh<br>
Valor Base: R$ ${valorBase.toFixed(2)} <br>
Acréscimo: R$ ${acrescimo.toFixed(2)} <br>
<b> Valor Final: R$ ${valorFinal.toFixed(2)} </b>`;