// Criem uma página HTML simples que:
    // Pergunte o Nome do Cliente
    // Peça o Saldo inicial da conta
    // Pergunte o valor que deseja sacar

    // Faça uma verificação
        // Se o saque for maior que o saldo da conta
            // Exibe uma mensagem de saldo insuficiente e o valor disponível na conta
        // Caso contrário, subtraia o valor do saque do valor do saldo
            // Exibe uma mensagem de saque realizado e o valor dispinivel após o saque

///////////////////////////////////////////////////////////////////////////////////////////////////

// Exemplo de impressão
    // Cliente: Nome Aluno
    // Saldo inicial: R$500
    // Saque: R$200
    // Novo Saldo: R$300

const nomeCliente = prompt('Digite o nome do Cliente');
const saldoInicial = Number(prompt('Digite o Saldo Inicial'));
const valorSacado = Number(prompt('Qual o Valor Desejado para Saque?'));
let novoSaldo = '';

let verificacao = '';
if (valorSacado > saldoInicial) {
    verificacao = `<b>Saldo Insuficiente! <br> Saldo disponível na conta: ${saldoInicial}.</b><br>`;
} else {
    novoSaldo = saldoInicial - valorSacado;
    verificacao = `<b>Saque realizado! <br> Novo saldo disponível na conta: ${novoSaldo} </b><br>`;
}

document.body.innerHTML += `${verificacao}<br> <b> Cliente: </b> ${nomeCliente} <br> <b> Saldo: </b> ${saldoInicial} <br> <b> Saque: </b> ${valorSacado} <br> <b> Novo Saldo:</b> ${novoSaldo}`;