//let menssagem = "Hoje o dia esta triste!"
//document.writeln(menssagem.toUpperCase())
//document.writeln(menssagem.length)
//document.writeln(menssagem.replace("triste","feliz"))

            //Data e Ano
//let agora = new Date();
//document.writeln("Estamos no ano de vestibular " + agora.getFullYear());
//document.writeln("<br>");
//document.writeln(new Date().toLocaleDateString()) ; 


            //Hora e Minutos
//let agora = new Date()
//let hora = agora.getHours()
//let minuto = agora.getMinutes()
//document.writeln("Horario atual: " + hora + ":" + minuto)


            //Acertando a hora
//.padStart(2, '0') Se não tiver dois caracteres, complemanta com o 0

//let agora = new Date()
//let hora = String(agora.getHours()).padStart(2, "0")
//let minuto = String(agora.getMinutes()).padStart(2, "0")
//document.writeln("Horario Atual: " + hora + ":" + minuto)   


/*
        //Código 
 let mensagem = ("ALERTA-SISTEMA-INVASAO-DETECTADA")
// 2. Limpando os espaços
let mensagemLimpa = mensagemBruta.trim();
// 3. Cortando nos traços
let partes = mensagemLimpa.split("-");
// 4. Pegando a segunda palavra
let palavraSecreta = partes[1];
document.writeln("A palavra secreta é: " + palavraSecreta);
*/

/*
        //Email
document.writeln("FUGIIENZO@GMAIL.COM". toLocaleLowerCase())
*/

/*
        //Contar espaços sobrando, no começo e fim da frase
let nome = "      Enzo Fugii      "
document.writeln("Se tem: " + nome.trim().length, " espaços irrelevantes")
*/

/*
        //Mostrar apenas o nome Fugii
let nomeCompleto = "Enzo Rossi Fugii"
document.writeln(nomeCompleto.split(" ") [2])
*/

/*
        //Letras contadas, sem os espaços
let nomeVirus = "        VIRUS DETECTADO      "
document.writeln(nomeVirus.split(" ").join("").length)
*/

/*
        //Troca de Identidade
document.writeln("Alvo: Fugii".replace("Fugii", "Rossi"))
*/

/*
       //Separar apenas o mes e ano
const data = new Date();
const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Garante 2 dígitos
const ano = data.getFullYear();

document.writeln(`Mostrando apenas o mês e ano: ${mes}/${ano}`);
*/

/*
        //Mostrar apenas o "Gmail.com"
let email = "fugiienzo@gmail.com"
document.writeln(email.split("@")[1])
*/

/*
        //Mostrar apenas os numeros da placa
let placa = "ABC-123"
document.writeln(placa.split("-")[1])
*/

/*
        //Pegar apenas as iniciais do nome
let nome = "Enzo Fugii"
let partes = nome.split(" ")
let iniciais = partes[0][0] + partes[1][0]
document.writeln("As iniciais são: " + iniciais)
*/

/*
        //URL "www.site.com.br/blog/post-1", pegue apenas a última parte ("post-1").
let site = "www.site.com.br/blog/post-1"
document.writeln(site.split("blog/")[1])
*/

/*
        //O Ano do Sistema: Crie um new Date() e exiba: "O sistema está operando no ano: [ANO]".
let anoAtual = new Date()
document.writeln("O sistema esta operando em: " + anoAtual.getFullYear())
*/


/*
        //Validação de Turno: Pegue a hora atual. Se for maior que 18, exiba "Modo Noturno Ativado".
let agora = new Date()
let hora = agora.getHours()

if(hora > 18){
        document.writeln("Modo noturno ativado")
}else{
        document.writeln("Modo noturno desativado")
}
*/

/*
        //O Mês que vem: Exiba o número do mês atual + 1. (Útil para vencimento de faturas).
let data = new Date()
let mes = data.getMonth() + 2
document.writeln("A fatura vence no mês: " + mes)
*/

/*
        //O "Timestamp" da Missão: Gere o número total de milissegundos desde 1970 usando Date.now(). É o "ID" único de quase tudo na web.
const timestamp = Date.now();
document.writeln(timestamp + " milissegundos"); // Ex: 1710344400000 (um número grande em milissegundos)
*/


        //Espada Lendaria
document.writeln("Olá aventureiro, animado para saber qunado você pega a sua espada lendaria".toUpperCase())

document.writeln("<br>")
document.writeln("<br>")
document.writeln("<br>")

// pegar o dia atual da semana
let hoje = new Date().getDay();

// calcular quantos dias faltam para domingo
let diasFaltando = 7 - hoje;

if (hoje === 0) {
    document.writeln("🎉 Parabéns! Você ganhou a Espada Lendária 🗡️!");
} else {
    document.writeln(`Faltam ${diasFaltando} dias de login para você ganhar a Espada Lendária 🗡️!`);
}

document.writeln("<br>")
document.writeln("<br>")

// lista de recompensas
let recompensas = [
    "Espada Lendária 🗡️",
    "10 Moedas 💰",
    "20 Moedas 💰",
    "30 Moedas 💰",
    "Baú de Bronze 📦",
    "Baú de Prata 🥈",
    "Baú de Ouro 🥇"
];

// mostrar também outra recompensa
document.writeln(`Faltam ${diasFaltando} dias de login para você ganhar ${recompensas[1]}!`);