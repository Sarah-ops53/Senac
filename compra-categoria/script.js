//ENUNCIADO:
    // Criem uma página HTML simples.
    // Vamos criar um sistema de caixa de supermercado que cálcula descontos.
    // 1. O usuário deve informar 3 produtos diferentes.
        //  Pra cada produto, pergunte:
            // - Nome do produto;
            // - Categoria (Alimento, Limpeza e Higiene);
            // - Preço unitário;
            // - Quantidade comprada;
    // 2. O sistema deve:
            // - Calcular o subtotal de cada produto (preço * quantidade);
            // - Calcular o valor total da compra (soma do subtotais);
            // - Verificar se há pelo menos 1 produto da categoia "Alimento";
            // - Se tiver, aplicar 5% de dresconto no total;
            // - Se o valor total ultrapassar R$500, aplicar também mais 10% de desconto; (Os descontos são acumulativos)
    // 3. Mostrar na tela:
            // - Lista de produtos com nome, categoria, quantidade e subtotal;
            // - Valor total SEM descontos;
            // - Valor do desconto aplicado;
            // - Valor final COM desconto;

    // EXEMPLO:
    // Produto 1: Arroz (Alimento), preço 20, quantidade 5 - subtotal = 100.
    //
    //
    
const produtos = [];

for (let contador = 1; contador <= 3; contador++) {
    const nome = prompt(`Digite o nome do produto: ${contador}`);
    const categoria = prompt(`Digite a catedoria do produto: ${contador}`);
    const preco = Number(prompt(`Digite o preço do produto: ${contador}`));
    const qnt = Number(prompt(`Digite a quantidade do produto: ${contador}`));
    produtos.push({nome, categoria, preco, qnt});
}

let total = 0;
let temAlimento = false;
let listaProdutos = "";

for (let contador = 0; contador < produtos.length; contador++){
    const p = produtos[contador];
    const subTotal = p.preco * p.qnt;
    total += subTotal;

    if(p.categoria.toLowerCase() === 'alimento'){
        temAlimento = true;
    }

    listaProdutos += `-${p.nome}(${p.categoria}) → ${p.qnt} → x R$${p.preco.toFixed(2)} = R$${subTotal.toFixed(2)}<br>`;
}

let desconto = 0;
if(temAlimento){
    desconto += total * 0.05;
}
if (total > 500) {
    desconto += total * 0.10;
}

const valorFinal = total - desconto;

document.body.innerHTML += `<h2> Resumo da Compra </h2>
 ${listaProdutos}<br>
 Valor total: R$${total.toFixed(2)}<br>
 Desconto aplicado: R$${desconto.toFixed(2)}<br>
 Valor final: <b> R$${valorFinal.toFixed(2)} </b>`;