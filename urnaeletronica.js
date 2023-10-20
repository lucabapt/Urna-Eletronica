function urnaEletronica() {

// Aqui vai todo o codigo do programa....

console.log('Iniciando o programa');


let

  VotosCandidato1 = 0,
  VotosCandidato2 = 0,
  VotosCandidato3 = 0,
  VotosBranco = 0,
  VotosNulo = 0,
  nomecandidato1, 
  nomecandidato2, 
  nomecandidato3;
  encerrarvotacao = '';

console.log(VotosCandidato1);
console.log(VotosCandidato2);
console.log(VotosCandidato3);
console.log(VotosBranco);
console.log(VotosNulo);

nomecandidato1 = prompt  ('Nome do Candidato 1');
nomecandidato2 = prompt  ('Nome do Candidato 2');
nomecandidato3 = prompt  ('Nome do Candidato 3');

do {
      // Instruções repetidas no Loop \\ 

console.log('|1|', nomecandidato1,);
console.log('|2|', nomecandidato2,);
console.log('|3|', nomecandidato3,);
console.log('|5| Branco');
console.log('|8| Nulo');



voto = parseInt(prompt('Digite sua opção de voto'));


if (voto === 1){
  VotosCandidato1++;
  console.log('O', nomecandidato1 , 'recebeu um voto');

} else if (voto === 2) {
  VotosCandidato2++;
  console.log('O', nomecandidato2 , 'recebeu um voto');

} else if (voto === 3) {
    VotosCandidato3++;
    console.log('O', nomecandidato3, 'recebeu um voto');
  
} else if (voto === 5) {
    VotosBranco5++;
    console.log('Um voto em branco');
    
  } else if (voto === 8) {
    VotosNulo++;
    console.log('Um voto nulo');      


  }  else if (voto === 123456) {
      console.log('Encerrar Programa');  

      encerrarvotacao = prompt ('Deseja realmente encerrar a votação'); 

      if (encerrarvotacao !== 'S' && encerrarvotacao !== 'N') {
        alert('Opção inválida!');

      }

    encerrarvotacao = prompt('Deseja REALMENTE encerrar a votação? Digite [S] para Sim ou [N] para Não').charAt(0).toUpperCase();

    console.log ("O programa esta encerrado")

    console.log ("O total de votos é \n", VotosCandidato1+VotosCandidato2+lVotosCandidato3+VotosBranco+VotosNulo);

    console.log ("O total de votos do",  nomecandidato1, "é\n" , VotosCandidato1);
    console.log ("% de votos no" , nomecandidato1 ,  "é \n", (VotosCandidato1/(VotosCandidato1+VotosCandidato2+VotosCandidato3)*100 + "%")).toFixed(2);

    console.log ("O total de votos do" , nomecandidato2 , "é \n" , totalVotosCandidato2);
    console.log ("% de votos no", nomecandidato2 ,"é \n", VotosCandidato2/(VotosCandidato1+VotosCandidato2+lVotosCandidato3)*100 + "%").toFixed(2);

    console.log ("O total de votos do", nomecandidato3 ,"é \n" , totalVotosCandidato3);
    console.log ("% de votos no", nomecandidato3, "é \n", (VotosCandidato3/(VotosCandidato1+VotosCandidato2+VotosCandidato3)*100) + "%").toFixed(2);
    
    console.log ("O total de votos em Branco é \n" , VotosBranco);
    console.log ("% de votos em Branco é \n", VotosBranco/((VotosCandidato1+VotosCandidato2+VotosCandidato3+VotosBranco+VotosNulo)*100) + "%");

    console.log ("O total de votos Nulo é \n" , VotosNulo);
    console.log ("% de votos Nulo é \n", VotosNulo/(VotosCandidato1+VotosCandidato2+VotosCandidato3+VotosBranco+VotosNulo) *100 + "%");

    console.log ("O total de votos validos é \n" , VotosCandidato1+VotosCandidato2+VotosCandidato3);
    
    

    return;

  }

} 

while (voto !==0){

console.clear();

}}