// Criem uma página HTML simples que:
    // Pergunte ao usuário
        // O nome do produto
        // O preço do produto
        // O tipo de cliente (Comum, Estudante, Assinante)      // const tipoCliente = prompt(`Você é cliente: comum, estudante ou assinante?`)

    // Faça uma verificação
        // Se for cliente comum - Não aplica desconto
        // Se for cliente estudante - Aplica 10% de desconto
        // Se o cliente for assinante - Aplica 20% de desconto

    // Exibe na tela (imprime dentro do html)
        // Nome do produto
        // Tipo de cliente
        // Preço original
        // Valor do desconto aplicado
        // Preço com desconto

////////////////////////////////////////////////////////////////////////////////////

// Exemplo de impressão:
    // Produto: camiseta
    // Cliente: estudante
    // Preço original: R$100
    // Valor do desconto aplicado: R$10.00
    // Preço final: R$90.00

//////////////////////////////SOLUÇÃO///////////////////////////////////////////////

const nomeProduto = prompt(`Digite o nome do produto`);
const preco = Number(prompt(`Digite o preço do produto`));
const tipoCliente = prompt(`Você é cliente: Comum, Estudante ou Assinante?`);

let desconto = ``;
if (tipoCliente.toLowerCase() === `assinante`) {
    desconto = 0.20;
} else if (tipoCliente.toLowerCase() === `estudante`) {
    desconto = 0.10;
} else{
    desconto = 0;
}

const valorDesconto = preco * desconto;
const precoFinal = preco - valorDesconto;

document.body.innerHTML += `<h2> Recibo de Compra</h1><br><b>Produto: </b> ${nomeProduto} <br> <b> Cliente: </b> ${tipoCliente} <br> <b> Preço Original </b> R$${preco.toFixed(2)} <br> <b> Preço do Desconto Aplicado:</b> R$${valorDesconto.toFixed(2)} <br> <b> Preço Final: </b> R$${precoFinal.toFixed(2)}`;