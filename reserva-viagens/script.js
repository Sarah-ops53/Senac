// ENUNCIADO 
// CRIEM UM SISTERMA DE RESERVA DE VIAGENS
// 1 - No arquivo index.html, criem um formulário com os campos: Nome do passageiro, Data da viagem e Destino.
// 2 - No script.js - Cada reserva deve ser salva em um array de objetos {nome, data, destino}.
// 3 - Liste todas as reservas cadastradas no DOM ( no HTML ).
// 4 - Ainda no JS, faça uma verificação que:
    // Se a data da viagem for anterior à data atual, mostrar em vermelho com a mensagem "Data Inválida".
    // Se a data da viagem for igual ao dia de hoje, mostrar em amarelo com a mensagem "A Viagem é Hoje!".
    // Se a data de viagem for futura, mostrar em verde com a mensagem "Viagem Confirmada".
// 5 - Ao final, estilize a página com style.css externo.

const viagem = [];
const form = document.querySelector('#formulario');
const lista = document.querySelector('#lista');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = form.querySelector(`#nome`).value;
    const data = form.querySelector(`#data`).value;
    const destino = form.querySelector(`#destino`).value;
    const reserva = {nome, data, destino};
    viagem.push(reserva);
    mostrarLista();
    form.reset();
})

function mostrarLista(){
    lista.innerHTML = ``;
    for(let i = 0; i < viagem.length; i++){
        const hoje = new Date().toISOString().split('T')[0];
        const reserva = viagem[i];
        let mensagem = '';
        if (reserva.data < hoje) { 
            mensagem = `Data Inválida`;
        } else if (reserva.data === hoje) {
            mensagem = `A Viagem é Hoje!`;
        } else if (reserva.data > hoje){
            mensagem = `Viagem Confirmada`;
        }
        const formataData = reserva.data.split('-').reverse().join('/');
        lista.innerHTML += `
        <div class="card">
            <h3><b>${reserva.nome}</b></h3>
            <p>${formataData}</p>
            <p>Destino: ${reserva.destino}</p>
            <p>${mensagem}</p>
        </div>`;
    }
};

