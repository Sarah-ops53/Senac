const frases = [
    "Defina prioridades",
    "Planeje sua rotina de estudos",
    "OAlterne os conteúdos de estudo",
    "Tenha cuidado com a “curva do esquecimento”",
    "Invista em aprendizagem contextual",
    "Ensine o que aprendeu para outra pessoa",
    "Evite distrações"
];

const botao = document.querySelector('button');
const frase = document.querySelector('#frases');

function gerarFrase(){
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    frase.innerText = frases[indiceAleatorio];
};
botao.addEventListener('click', gerarFrase);