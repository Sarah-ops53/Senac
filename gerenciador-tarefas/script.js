// ENUNCIADO:
    // Vamos criar um gerenciador de tarefas.
    // 1. No index.html - Crie um formulário na página com:
    //  - Campo de texto para título;
    //  - Campo de texto para descrição;
    //  - Select (caixa de escolha) para prioridade: Alta, Média ou Baixa;
    //  - Botão "Adicionar";
    // 2. Cada vez que o usuário cadastrar uma tarefa:
    //  - Crie um objeto {título, descrição, prioridade};
    //  - Adicione esse objeto dentro de um array de tarefas;
    // 3. Mostre todas as tarefas cadastradas listadas na tela.
    // 4. Aplique cores diferentes conforme a prioridade:
    //  - Alta → vermelho;
    //  - Média → amarelo;
    //  - Baixa → verde;
    // 5. As tarefas devem aparecer listadas com título, descrição e prioridade.
    //
    // EXEMPLO:
    // Entrada: titulo = "Estudar", descrição = "Fazer exercícios de JS", prioridade = Alta.
    // Saída: Card na tela com:
    //       Estudar
    //       Fazer exercícioss de JS
    //       Prioridade: Alta (em vermelho)

// const form = document.querySelector('#formulario');
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const  = e.target.querySelector('');
//     const  = e.target.querySelector('');

const tarefas =[];
const form = document.querySelector('#formulario');
const lista = document.querySelector('#lista');
form.addEventListener('submit', function(e /*event*/){
    e.preventDefault();
    const titulo = document.querySelector(`#titulo`).value;
    const descricao = document.querySelector(`#descricao`).value;
    const prioridade = document.querySelector(`#prioridade`).value;
    const tarefa = {titulo, descricao, prioridade};
    tarefas.push(tarefa);
    mostrarTarefa();
    form.reset();
});

function mostrarTarefa(){
    lista.innerHTML = ``;
    // contador === indice === i;
    for(let indice = 0; indice < tarefas.length; /*contador*/ indice++){
        const tarefa = tarefas[indice];     // se   else
        const cor = tarefa.prioridade === `Alta` ? `red` : tarefa.prioridade === `Média` ? `orange` : `green`;
        lista.innerHTML += `
        <div class="card" style="border: 1px solid ${cor}">
            <h3> <b> ${tarefa.titulo} </b> </h3>
            <p> ${tarefa.descricao} </p>
            <p> Prioridade: <span style="color${cor}"> ${tarefa.prioridade} </span> </p>
        </div>
        `;
    }
};