const form = document.querySelector('.formulario');
const campoTitulo = form.querySelector('#titulo');
const campoDescricao = form.querySelector('#descricao');
const campoPrioridade = form.querySelector('#prioridade');
const campoData = form.querySelector('#data');
const btnAdd = form.querySelector('#adicionar');
const erro = document.querySelector('.erro');
const listaMetas = document.querySelector('#lista-metas');

function adicionarMeta(e) {
    e.preventDefault();
    erro.innerText = "";

    const titulo = campoTitulo.value.trim(); /*o trim remove os espaços*/
    const descricao = campoDescricao.value.trim();
    const prioridade = campoPrioridade.value;
    const data = campoData.value;
    const hoje = new Date().toISOString().split('T')[0];

    if (!titulo || !descricao || !prioridade || !data || data < hoje) {
        erro.innerText = "Preencha os campos corretamente.";
        return;
    }
    const li = document.createElement('li');
    li.classList.add(prioridade);
    li.innerHTML = `
        <div class = "item-lista">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
            <p><b>Prioridade:</b>${prioridade}</p>
            <p><b>Data:</b>${data}</p>
        </div>
    `;

    const btnConcluir = document.createElement('button');
    btnConcluir.innerText = '✓';
    btnConcluir.classList.add('btn', 'btn-concluir');
    btnConcluir.addEventListener('click', function () {
        if (li.classList.contains('concluida')) {
            li.classList.contains('concluida');
            btnConcluir.innerText = '✓';
        } else {
            li.classList.add('concluida');
            btnConcluir.innerText = '↵';
        }
    });
    const btnRemover = document.createElement('button');
    btnRemover.innerText = '✖';
    btnRemover.classList.add('btn', 'btn-remover');
    btnRemover.addEventListener('click', function () {
        li.remove();
    });
    li.appendChild(btnConcluir);
    li.appendChild(btnRemover);

    listaMetas.appendChild(li);

    form.reset();
}
btnAdd.addEventListener('click', adicionarMeta);
///////////////////////////////////////////////
//     let nomeMeta = titulo.value;
//     let descricaoMeta = descricao.value;
//     let prioridadeMeta = prioridade.value;
//     let dataMeta = data.value;
//     if(nomeMeta === "" || descricaoMeta === "" || prioridadeMeta === "" || dataMeta === "" ){
//         erro.innerHTML = `<p class="erro">Preencha os campos corretamente.</p>`;
//         return;
//     }
//     erro.innerHTML = "";
//     const li = document.createElement('li');
//     li.classList.add('itemLista');
//     li.classList.add(prioridadeMeta);
//     li.innerHTML = `<div class="textoLista">
//                         <p>${nomeMeta}</p>
//                         <p>${descricaoMeta}</p>
//                         <p>${prioridadeMeta}</p>
//                         <p>${dataMeta}</p>
//                     </div>
//                     <div>
//                         <button class="concluir">concluir</button>
//                         <button class="remover">X</button>
//                     </div>`
//     lista.appendChild(li);
//     form.reset();
//     const btnConcluir = document.querySelector('.concluir');
//     const btnRemover = document.querySelector('.remover');
//     btnConcluir.addEventListener('click', function(){
//         li.classList.toggle('concluida');
//     });
//     btnRemover.addEventListener('click', function(){
//         li.remove();
//     });
// };
// btnAdd.addEventListener('click', adicionarMeta);


