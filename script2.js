let hoje = new Date();
let diasDaSemana =hoje.getDay();
let nomesDias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
let diasParaSabado = 6 - diasDaSemana;

document.writeln (`Hoje é ${nomesDias[diasDaSemana]}!`)
document.writeln("<br>");
document.writeln("<br>")
document.writeln("Quantos dias faltam para sabado??")
document.writeln("<br>")
document.writeln(`Faltam apenas ${diasParaSabado} dia 🥳 🥳 🥳 `)