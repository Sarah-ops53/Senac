const  usuários  = [
    { nome :  `Angélica` , senha :  `12345` },
    { nome :  `Júlia` , senha : `4321` },
    { nome :  `Sarah` , senha :  `6789` }
];

const  cadastro  =  prompt ( `Digite seu nome de usuário` );
const  senha  =  prompt ( `Digite sua senha` );

let  mensagem  =   `Usuário ou senha incorreta.` ;
for ( let  contador  =  0 ; contador  <  usuários . length ; contador ++ ){
    if ( usuários [ contador ]. nome  ===  cadastro  &&  usuários [ contador ]. senha  ===  senha ){
        mensagem  =  `Bem vinda, ${ usuários [ contador ]. nome } !!! :)` ;
    }
}

documento . corpo . innerHTML  +=  `<h2> ${ mensagem } </h2>` ;
    