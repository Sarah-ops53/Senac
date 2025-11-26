/*
Sistema de pedidos

Vocês vão criar uma página interativa onde o usuário pode montar um pedido selecionando um prato, uma bebida e opcionais. No final, o sistema deve exibir um resumo completo do pedido com o valor total calculado automaticamente.

O projeto deve ser publicado no GitHub dentro da pasta Senac.

1) Estrutura do projeto
    Criem uma pasta chamada projeto-pedidos.
        Dentro dela, criem:
            index.html
            Pasta css → style.css
            Pasta js → script.js

2) HTML
    A página deve conter:
        Header:
            Um título principal: "Monte sua Refeição"

        Main:
            Uma section
                Um formulário (id="form") contendo:
                    Um <select> de pratos com pelo menos 3 opções
                    Um <select> de bebidas com pelo menos 3 opções
                    Três checkboxes representando adicionais, como:
                        Sobremesa
                        Molho Extra
                        Embalagem Premium
                    Um botão "Calcular Total"
                Uma div de erro com id="erro"

            Uma segunda section com id="resultado" que inicialmente deve estar oculta.
            Essa section exibirá:
                O prato escolhido
                A bebida escolhida
                A lista de adicionais marcados
                O valor total calculado
                Um botão "Novo Pedido"

        Footer:
            Nome do aluno e data

3) CSS
    A página deve ser organizada e responsiva:
        Centralizem o formulário
        A section de resultado deve aparecer como um painel destacado
        O resultado deve ser exibido apenas após o cálculo
        O formulário deve desaparecer quando o resultado for mostrado
        Utilizar classes para esconder/mostrar elementos (ex: .esconder ou .hidden)
        Evitar qualquer estilo inline

4) JavaScript
    No arquivo script.js:
        1. Capturar todos os elementos da interface com document.querySelector e document.querySelectorAll
        2. Criar um objeto contendo todos os preços
           Exemplo:
               const precos = {
                   prato: { nomePrato: 10.00, ... },
                   bebida: { nomeBebida: 10.00, ... },
                   adicionais: { nomeAdicional: 10.00, ... }
               }

        3. Criar a função calcular(), que deve:
            Validar se o prato foi selecionado
            Validar se a bebida foi selecionada
            Se houver erro, mostrar mensagem na div erro e não continuar
            Somar:
                O valor do prato escolhido
                O valor da bebida
                Todos os adicionais marcados
            Exibir o resumo dentro da section #resultado
            Esconder o formulário
            Criar o botão "Novo Pedido"

        4. Criar a função resetar(), que:
            Deve limpar o formulário
            Restaurar selects e checkboxes
            Esconder o resultado
            Mostrar novamente o formulário

        5. Adicionar os eventos com addEventListener:
            Botão calcular chama calcular()
            Botão novo pedido chama resetar()

5) Regras adicionais
    Não permitir calcular sem prato ou bebida escolhidos
    Mostrar erros na tela apenas quando necessário
    O resultado deve aparecer somente depois que o cálculo for concluído
    Não usar estilos inline

6) Publicação no GitHub
    Dentro da pasta Documentos, criem uma pasta chamada GitHub
    Dentro dela criem um repositório chamado Senac usando o GitHub Desktop
    Dentro da pasta Senac criem uma pasta chamada calculadora-refeicao
    Colocar todo o projeto dentro dela e fazer:
        Commit com a mensagem:
            "Adiciona projeto Calculadora de Refeição"
        Push origin

OBSERVAÇÃO:
    TODOS OS PROJETOS DEVEM SER SALVOS DENTRO DA PASTA SENAC.
*/

const form = document.querySelector('#formulario');
const campoPratos = form.querySelector('#pratos');
const campoBebidas = form.querySelector('#bebidas');
const adicionais = form.querySelectorAll('input[type="checkbox"]');
const btnCalcular = form.querySelector('#calcular');
const erro = document.querySelector('#erro');
const resultado = document.querySelector('#resultado');

const precos = {
    pratos: {
        strogonoff: 22.50,
        galinhada: 24.98,
        feijoada: 20.99
    },
    bebidas: {
        agua: 4.00,
        cafe: 5.00,
        refrigerante: 8.00,
        suco: 6.00
    },
    adicionais: {
        sobremesa: 12.00,
        molho: 5.00,
        chopp:10.00
    }
};

function calcular(e){
    e.preventDefault();
    const pratos = campoPratos.value;
    const bebidas = campoBebidas.value;
    let total = 0;

    if(pratos === ""){
        erro.textContent = "Escolha um prato válido.";
        return
    }

    if (bebidas === "") {
        erro.textContent = "Escolha uma bebida válida.";
        return;
    }

    erro.textContent = "";
    total += precos.pratos[pratos];
    total += precos.bebidas[bebidas];
    let extrasEscolhidos = [];
    adicionais.forEach(item => {
        if(item.checked){
            total += precos.adicionais[item.value];
            extrasEscolhidos.push(item.value);
        }
    });

    resultado.innerHTML = `
    <div class="pedidos">
    <h2> Resumo do Pedido</h2>
    <p><b> Prato: </b>${pratos}</p>
    <p><b>Bebida: </b>${bebidas}</p>
    <p><b>Adicionais: </b>${extrasEscolhidos.length > 0 ? extrasEscolhidos.join(',') : "Nenhum"}</p>
    <p><b>Total:${total.toFixed(2).replace('.', ',')} </b> </p>
    <button id="novoPedido"> Novo Pedido </button>
    </div>
    `;

    form.classList.add('hidden');
    resultado.classList.remove('hidden');
    document.querySelector('#novoPedido').addEventListener('click', resetar);
}

function resetar(){
    form.classList.remove('hidden');
    resultado.classList.add('hidden');
    form.reset();
    resultado.innerHTML = "";
}

btnCalcular.addEventListener('click', calcular);