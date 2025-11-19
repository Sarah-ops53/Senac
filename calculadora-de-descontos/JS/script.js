const campoPreco = document.querySelector('#preco');
const opcoesPagamento = document.querySelector('#pagamento');
const btn = document.querySelector('#btn');
const resultado = document.querySelector('#resultado');

function calcularValorFinal(){
    const preco = parseFloat(campoPreco.value);
    const pagamento = opcoesPagamento.value;

    if(isNaN(preco) || preco <= 0 || pagamento === ""){
        resultado.innerHTML = '<p class="acrescimo">Por favor, preencha todos os campo corretamente.</p>';
        return;
    }

    let valorFinal = preco;
    let mensagem = "";
    let classe = "";
    let valorParcelado;

    if(pagamento === 'avista'){
        valorFinal = preco * 0.9;
        mensagem = "Você recebeu um desconto de 10%";
        classe = 'desconto';
    } else if(pagamento === 'credito'){
        valorFinal = preco;
        mensagem = "Compra realizada no crédito, não aplica desconto.";
        classe = 'semDesconto';
    } else if(pagamento === '2x'){
        valorFinal = preco * 1.05;
        valorParcelado = valorFinal / 2;
        mensagem = `Compra realizada em 2x, acrescimo de 5%.
        Valor de cada parcela: ${valorParcelado.toFixed(2).replace('.', ',')}`;
        classe = 'acrescimo';
    } else if(pagamento === '3x'){
        valorFinal = preco * 1.10;
        valorParcelado = valorFinal / 3;
        mensagem = `Compra realizada em 3x, acrescimo de 10%
        Valor de cada parcela: ${valorParcelado.toFixed(2).replace('.', ',')}`;
        classe = 'acrescimo';
    }

    resultado.innerHTML = `<p class="${classe}">${mensagem}</p>
    <p>Valor final: <b>R$ ${valorFinal.toFixed(2).replace('.', ',')}</b></p>
    `;

}

btn.addEventListener('click', calcularValorFinal);