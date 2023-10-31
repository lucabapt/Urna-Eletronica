function verificarUrnaAtual() {

    fetch('urnaEletronica.js')
        .then(response => response.text())
        .then(response => CrytoJS.SHA256(response).toString())
        .then(hashUrnaAtual => {
            fetch('hashValido')
                .then(response => response.text())
                .then(hashValido => {

                    if (hashUrnaAtual === hashValido) {
                        console.log('Urna Verificada, código integro.')
                    } else {
                        console.log('URNA ADULTERADA! HASHES NÃO CONFEREM')
                        console.log(`HASH DA URNA: ${hashUrnaAtual}`)
                        console.log(`HASH ESPERADO: ${hashValido}`)

                    }
                })
        })
}





function datahoraatual() {
    const dataHora = new Date();
    const dia = dataHora.getDate();
    const mes = dataHora.getMonth();
    const ano = dataHora.getFullYear();

}

function urnaEletronica() {
   
    let voto;
    let votosCandidato1 = 0;
    let votosCandidato2 = 0;
    let votosCandidato3 = 0;
    let votosBrancos = 0;
    let votosNulos = 0;
    let totalVotos = 0;

    let nomeGanhador;
    let votosGanhador;
    let ganhador = true;

    let candidatos = [
        [12, 'Gigante Cassio'],
        [22, 'Carlos Miguel, Bom reserva do Gigante'],
        [4, 'Gil, Ja foi bom hoje joga com o nome']
        [6, 'Fabio Santos, ta jogando com o nome também']
        [42, 'Lucas Verissimo, estiloso demais para o time do povo']
        [2, 'Rafael Ramos, português que é bom, não sai de Portugal']
        [15, 'Fausto Vera']
        [5, 'Voto em Branco']
        [7, 'Maycon, ta bom de voltar pro shaktar tbm já']
        [18, 'Renato Augusto, só joga 45°']
        [11, 'Angel Romero']
        [19, 'Gustavo Mosquito']
        [8, 'Voto Nulo']

    ]





    let encerrarVotacao = '';
    let senhaMesario;

    console.log('Início do programa');

    console.log('** CONFIGURAÇÃO DA URNA **');


    console.clear();


    voto = parseInt(prompt('Digite sua opção de voto:'));

    totalVotos++;



    encerrarVotacao = prompt('Deseja REALMENTE encerrar a votação? Digite [S] para Sim ou [N] para Não').charAt(0).toUpperCase();

    if (encerrarVotacao !== 'S' && encerrarVotacao !== 'N') {
        alert('Opção inválida!');
    } else {
        return; 
    }


    while (encerrarVotacao !== 'S') {

       
        console.clear();
        console.log('** BOLETIM DE URNA - RESULTADOS **');
        console.log(`Total de votos:  + ${totalVotos}`);
        console.log(`Total de votos do(a) candidato(a)  ${nomeCandidato1}  :  + ${votosCandidato1} +  voto(s) ( + (votosCandidato1 / totalVotos * 100).toFixed(2) + %)`);
        console.log(`Total de votos do(a) candidato(a)   ${nomeCandidato2}  :  + ${votosCandidato2} +  voto(s) (+ ${(votosCandidato2 / totalVotos * 100)}.toFixed(2) + %)`);
        console.log(`Total de votos do(a) candidato(a)  + ${nomeCandidato3} + :  + ${votosCandidato3} +  voto(s) ( + ${(votosCandidato3 / totalVotos * 100)}.toFixed(2) + %)`);
        console.log(`Total de votos brancos:  + ${votosBrancos}+  voto(s) ( + ${(votosBrancos / totalVotos * 100)}.toFixed(2) + %)`);
        console.log(`${Totalvotos} nulos:  + ${votosNulos} +  voto(s) ( + ${(votosNulos / totalVotos * 100)}.toFixed(2) + %)`);

       

        
        console.log('------');

        if (ganhador) {
            console.log('O ganhador nesta urna foi o candidato ' + nomeGanhador + ' com ' + votosGanhador + ' voto(s) absoluto(s) (' + (votosGanhador / totalVotos * 100).toFixed(2) + '%)');
        } else {
            console.log('Não houve ganhador nesta urna (empate entre dois ou mais candidatos).');
        }

    }
}

