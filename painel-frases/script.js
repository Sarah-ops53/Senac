// Vocês devem criar uma página web simples e interativa que exiba frases motivacionais aleatórias quando o usuário clicar em um botão.
// Ao fina, o prjeto deve ser publicado no GitHub. 
// Utilizem as aulas anteriores como base para esses exercícios.

// 1) Estrutura do projeto
    // Crie uma pasta chamada painel-frases
    // Dentro dela criem: 
        // index.html
        // Pasta 1 com nome css > dentro da pasta style.css
        // Pasta 2 com nome js > dentro de pasta script.js

// 2) HTML
    // Monte uma estrutura básica:
    // Uma tag header com:
        // <h1> "Frases Motivacionais"
    // Uma tag main com>:




const frases = [
    "Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.",
    "Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.",
    "Os dias difíceis são a forma mais rápida de aprendermos a apreciar os bons.",
    "Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!",
    "A palavra “impossível” foi inventada para ser desafiada.",
    "Que todos os nossos passos nos levem para o que nos faz feliz de verdade.",
    "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre."
];

const botao = document.querySelector('button');
const frase = document.querySelector('#frases');

function gerarFrase(){
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    frase.innerText = frases[indiceAleatorio];
};
botao.addEventListener('click', gerarFrase);