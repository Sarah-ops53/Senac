// Criem uma página HTML simples que:
    // Peça o *Nome do Aluno*
    // Peça as 4 notas desse aluno, uma por vez
    // Realiza o cálculo da média final desse aluno
    // Exibe na tela (impresso HTML)
        // Nome do aluno
        // As 4 notas digitadas
        // Média final
            // Situação desse aluno
                // Aprovado com mérito (nota igual ou a cima de 9)
                // Aprovado (média entre 7 e 8.9)
                // Recuperação (média entre 5 e 6.9)
                // Reprovado (média menor que 5)

// Exemplo de impressão:
    // Aluno: Nome do Aluno
    // Notas: 8, 7, 6, 6
    // Média final: 7.5
    // Situação: Aprovado

const nomeAluno = prompt('Digite o nome do Aluno: ');
const nota1 = Number (prompt(`Primeira nota: `));
const nota2 = Number (prompt(`Segunda nota: `));
const nota3 = Number (prompt(`Terceira nota: `));
const nota4 = Number (prompt(`Quarta nota: `));

const media = (nota1 + nota2 + nota3 + nota4) / 4;

let situacao = "Situação: ";
if (media >= 9 ) {
    situacao = `Aprovado com Mérito`;
} else if (media >= 7 && media <= 8.9) {
    situacao = `Aprovado`;
} else if (media >= 5 && media <= 6.9) {
    situacao = `Recuperação`;
} else {
    situacao = `Reprovado`;
}

document.body.innerHTML += `Aluno: <b>${nomeAluno} </b> <br> Notas: <b> ${nota1, nota2, nota3, nota4} </b><br> Média Final: <b>${media} </b> <br> Situação: <b>${situacao} </b>`;