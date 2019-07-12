// let numero = 0;

// function teste(){
//     console.log(`Foi criada uma variável chamada "número" com o valor ${numero}`);
// }

// let numero1 = 10;
// let numero2 = 20;

// function escolherMaior(numero1, numero2){
//     let maior = numero1 > numero2 ? numero1 : numero2
//     return numero1 > numero2 ? numero1 : numero2
//     if(numero1>numero2){
//         return numero1;
//     }
//     return numero2;
// }


// let palavras = ['Clebsu','Kaka','Banana'];
// let palavraBuscada = 'Clebsu';

function verificarPalavraBuscada(palavras, palavraBuscada){
    for(let palavra of palavras){
        if(palavra === palavraBuscada){
            return true;
        }        
    }
    return false;
}


// function verificarPalavraBuscada(){
//     for(let nome of palavraBuscada){
//         if(palavraBuscada === nome[0]){
//             return true;
//         }
//         else if(palavraBuscada === nome[1]){
//             return true;
//         }
//         else if(palavraBuscada === nome[2]){
//             return true;
//         }
//         return false;
//     }
// }
 