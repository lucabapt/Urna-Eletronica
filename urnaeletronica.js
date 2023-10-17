function urnaEletronica() {

// Aqui vai todo o codigo do programa....

console.log('Iniciando o programa');


let

  totalVotosCandidato1 = 0,
  totalVotosCandidato2 = 0,
  totalVotosCandidato3 = 0,
  totalVotosBranco = 0,
  totalVotosNulo = 0;

console.log(totalVotosCandidato1);
console.log(totalVotosCandidato2);
console.log(totalVotosCandidato3);
console.log(totalVotosBranco);
console.log(totalVotosNulo);

do {
      // Instruções repetidas no Loop \\ 

console.log('|1| Candidato 1');
console.log('|2| Candidato 2');
console.log('|3| Candidato 3');
console.log('|5| Branco');
console.log('|8| Nulo');


voto = parseInt(prompt('Digite sua opção de voto'));

  switch (voto) {

    case 1:
      totalVotosCandidato1++;
      console.log('O candidato 1 recebeu um voto');
      break; 

    case 2:
      totalVotosCandidato2++;
      console.log('O candidato 2 recebeu um voto');
      break;
      
    case 3:  
      totalVotosCandidato3++;
      console.log('O candidato 3 recebeu um voto');
      break;

    case 5:
      totalVotosBranco++
      console.log('O branco recebeu 1 voto');
      break;

    case 8:
      totalVotosNulo++
      console.log('O nulo recebeu 1 voto');
      break;
      
    case 123456:
      console.log('Encerrar o programa')  
      default:
       

    console.log ("O programa esta encerrado")

    console.log ("O total de votos é", totalVotosCandidato1+totalVotosCandidato2+totalVotosCandidato3+totalVotosBranco+totalVotosNulo);
    console.log ("O total de votos do candidato 1 é" , totalVotosCandidato1);
    console.log ("O total de votos do candidato 2 é" , totalVotosCandidato2);
    console.log ("O total de votos do candidato 3 é" , totalVotosCandidato3);
    console.log ("O total de votos em Branco é" , totalVotosBranco);
    console.log ("O total de votos Nulo é" , totalVotosNulo);
    console.log ("O total de votos validos é" , totalVotosCandidato1+totalVotosCandidato2+totalVotosCandidato3);
    console.log ("% de votos no candidato 1 é", totalVotosCandidato1/(totalVotosCandidato1+totalVotosCandidato2+totalVotosCandidato3)*100 + "%");
    console.log ("% de votos no candidato 2 é", totalVotosCandidato2/(totalVotosCandidato1+totalVotosCandidato2+totalVotosCandidato3)*100 + "%");
    console.log ("% de votos no candidato 3 é", totalVotosCandidato3/(totalVotosCandidato1+totalVotosCandidato2+totalVotosCandidato3)*100 + "%");
    console.log ("% de votos em Branco é", totalVotosBranco/totalVotosCandidato1+totalVotosCandidato2+totalVotosCandidato3+totalVotosBranco+totalVotosNulo*100 + "%");
    console.log ("% de votos Nulo é", totalVotosNulo/totalVotosCandidato1+totalVotosCandidato2+totalVotosCandidato3+totalVotosBranco+totalVotosNulo *100 + "%");






    if (voto === 1){
      totalVotosCandidato1++;
      console.log('O candidato 1 recebeu um voto');

    } else if (voto === 2) {
      totalVotosCandidato2++;
      console.log('O candidato 2 recebeu um voto');

    } else if (voto === 3) {
        totalVotosCandidato3++;
        console.log('O candidato 3 recebeu um voto');
      
    } else if (voto === 5) {
        totalVotosBranco5++;
        console.log('Um voto em branco');
        
      } else if (voto === 8) {
        totalVotosNulo++;
        console.log('Um voto nulo');      


      }  else if (voto === 123456) {
          console.log('Encerrar Programa');  

    }

    return;

  }

} while (voto !==0);

console.clear

}



