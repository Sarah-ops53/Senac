// const data = new Date ();
// let diaSemana = data.getDay();

// let diaSemanaTexto;
// switch (diaSemana){
//     case 0: diaSemanaTexto = 'Domingo'; break;
//     case 1: diaSemanaTexto = 'Segunda-Feira'; break;
//     case 2: diaSemanaTexto = 'Terça-Feira'; break;
//     case 3: diaSemanaTexto = 'Quarta-Feira'; break;
//     case 4: diaSemanaTexto = 'Quinta-Feira'; break;
//     case 5: diaSemanaTexto = 'Sexta-Feira'; break;
//     case 6: diaSemanaTexto = 'Sábado'; break;
//     default: diaSemana = ''; break;
// }


// // function zeroAEsquerda(num){
// //     return num >= 10 ? num : `0${num}`;
// // }
// // function formataData(data){
// //     const dia = zeroAEsquerda(data.getDate());
// //     const ano = data.getFullYear();
// //     const hora = zeroAEsquerda(data.getHours());
// //     const min = zeroAEsquerda(data.getMinutes());
// //     const seg = zeroAEsquerda(data.getSeconds());

// //     return `${dia}/${mesAno}/${ano} às ${hora}:${min}:${seg}`;
// // }
// let mes = getMesAno;
// switch (mesAno){
//     case 0: mesTexto = 'Janeiro'; break;
//     case 1: mesTexto = 'Fevereiro'; break;
//     case 2: mesTexto = 'Março'; break;
//     case 3: mesTexto = 'Abril'; break;
//     case 4: mesTexto = 'Maio'; break;
//     case 5: mesTexto = 'Junho'; break;
//     case 6: mesTexto = 'Julho'; break;
//     case 7: mesTexto = 'Agosto'; break;
//     case 8: mesTexto = 'Setembro'; break;
//     case 9: mesTexto = 'Outubro'; break;
//     case 10: mesTexto = 'Novembro'; break;
//     case 11: mesTexto = 'Dezembro'; break;
//     default: mesTexto = ''; break;
// }
// console.log(diaSemana, mesAno, diaSemanaTexto);
// // const dataBrasil = formataData(data);


// console.log(dataBrasil);

//////////////////Solução do Lucas///////////////////////////////

// Seleciona o elemento H1 que está dentro de um elemento com a classe .container

// const h1 = document.querySelector('.container h1');
// function getDiaSemanaTexto(diaSemana){
//     switch(diaSemana){
//         case 0: return 'Domingo';
//         case 1: return 'Segunda-Feira';
//         case 2: return 'Terça-Feira';
//         case 3: return 'Quarta-Feira';
//         case 4: return 'Quinta-Feira';
//         case 5: return 'Sexta-Feira';
//         case 6: return 'Sábado';
//         default: return '';
//     }
// }
// function getNomeMes(numeroMes) {
//     const meses = [
//         'Janeiro',
//         'Fevereiro',
//         'Março',
//         'Abril',
//         'Maio',
//         'Junho',
//         'Julho',
//         'Agosto',
//         'Setembro',
//         'Outubro',
//         'Novembro',
//         'Dezembro'
//     ]
//     return meses [numeroMes] || '';
// }

// function zeroAEsquerda(num){
//     return num >= 10 ? num : `0${num}`;
// }
// function formataData(data){
//     const diaSemana = getDiaSemanaTexto(data.getDay());
//     const dia = data.getDate();
//     const mes = getNomeMes(data.getMonth());
//     const ano = data.getFullYear();
//     const hora = zeroAEsquerda(data.getHours());
//     const min = zeroAEsquerda(data.getMinutes());
//     const seg = zeroAEsquerda(data.getSeconds());
//     return `${diaSemana}, ${dia} de ${mes} de ${ano} às ${hora}:${min}:${seg}`;
// }

// setInterval(() => {
//     const dataAtual = new Date();
//     h1.innerHTML = formataData(dataAtual);
// }, 1000);

const h1 = document.querySelector(`.container h1`);
setInterval(() => {
let data = new Date();
h1.innerHTML = new Intl.DateTimeFormat(`pt-BR`, {dateStyle: `full`, timeStyle: `medium`}).format(data);
}, 1000);