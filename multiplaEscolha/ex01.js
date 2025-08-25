var dia
dia=parseInt(prompt("digite um valor de 1 a 7 para receber o dia da semana por extenso, por exemplo, caso digite 1, o retorno será domingo"))

switch(dia){
    case 1: 
        alert("Domingo")
        break;
    case 2:
        alert("Segunda-feira")
        break
    case 3:
        alert("Terça-feira")
        break;
    case 4:
        alert("Quarta-feira")
        break;
    case 5:
        alert("Quinta-feira")
        break;
    case 6:
        alert("Sexta-feira")
        break;
    case 7:
        alert("Sábado")
        break
    default:
        alert("Número inválido, digite um número entre 1 e 7")
        break;
}