/*
// Vamos pegar o elemento do HTML e trazer para o JS
const lampada = document.getElementById("lampada");
const botao = document.getElementById("botaoInterruptor");

//Função que vai mudar o estilo da lampada
function alternarLampada() {
  //Verificamos se a cor atual é a de "desligar"
  if (lampada.style.backgroundColor === 'yellow') {
    //se estiver acesa, apagamos
    lampada.style.backgroundColor = "#333";
    lampada.style.boxShadow = "none";
  } else {
    //se estiver apagada, acendemos
    lampada.style.backgroundColor = "yellow";
    lampada.style   .boxShadow = "0 0 50px yellow";
  }
}

//Em vez de usar o onclick no HTML, vamos usar o ouvinte de eventos aqui (mais limpo!)
botao.addEventListener('click' , alternarLampada)


-----------------------------------------------------------------------------------------------------------------------------


function atualizarTempo(){
    //Pegar a hora atual
    const agora = new Date()

    //Extraindo os dados como aprendemos (padStart)
    const h = String(agora.getHours()).padStart(2, '0')
    const m = String(agora.getMinutes()).padStart(2, '0')
    const s = String(agora.getSeconds()).padStart(2, '0')

    //Montando a String final (Templade Literals)
    const horaFormatada = `${h}:${m}:${s}`

    //Colocando na div relogio no HTML
    document.getElementById('relogio').textContent = horaFormatada
}
    //Faz o relógio "bater" a cada 1 seg
    setInterval(atualizarTempo, 1000)

    //Iniciar imediatamente
    atualizarTempo();
    

    ------------------------------------------------------------------------------------------------------------------

    function somar(){
// 1. O DOM localiza os elementos pelos IDs
const input1 = document.querySelector('#n1');
const input2 = document.querySelector('#n2');
const visor = document.querySelector('#resultado');

// 2. Captura os valores e converte de TEXTO para NÚMERO
// Se não usar Number(), 5 + 5 vira 55!
const valor1 = Number(input1.value);
const valor2 = Number(input2.value);

// 3. Realiza o cálculo
const total = valor1 + valor2;

// 4. Devolve o resultado para o DOM (tela)
visor.textContent = total;

// Log para o professor ver no F12
console.log( `Calculado: ${valor1} + ${valor2} = ${total}` );
    }

--------------------------------------------------------------------------------------------------------------------------------------------
*/

    let nivelHype = 0;

//selecionando o DOM
const corpo = document.getElementById('fundo');
const textoStatus = document.getElementById('status');
const displayContador = document.getElementById('contador');
const botaoHype = document.getElementById('btnHype');


botaoHype.addEventListener('click' , () => {
    nivelHype++;
    displayContador.innerText = nivelHype;


    //Lógica de "Vibe" baseada no DOM
    if (nivelHype > 10 && nivelHype <=26) {
        textoStatus.innerText = "Vibe: Tá aquecendo...";
        corpo.style.backgroundColor= "#d35400";
    } else if (nivelHype > 27 && nivelHype <= 47){
        textoStatus.innerText = "Vibe: Tá pegando fogoooo"
        corpo.style.backgroundColor = "#c0392b";
        botaoHype.style.transform = "scale(1.2)";
    } else if (nivelHype > 47 && nivelHype <= 66){
        textoStatus.innerText = "Vibe: Boraa que Boraaa"
        corpo.style.backgroundColor = "#ff6f5f";
        botaoHype.style.transform = "scale(1.2)";
    } else if (nivelHype == 67){
        textoStatus.innerText = "SIXXX SEVENNN 67"
        corpo.style.backgroundColor = "#ff0000"
        corpo.style.filter = "invert(1)"
        displayContador.style.fontSize = "150px"
    } else if (nivelHype >67) {
        textoStatus.innerText = "Vibe: MODO ZEUS ATIVADOOO";
        corpo.style.backgroundColor = "#8e44ad"
        corpo.style.filter = "invert(1)";
        displayContador.style.fontSize = "120px";
    }
});


document.getElementById('btnReset').addEventListener('click', () => {
    nivelHype = 0;
    displayContador.innerText = nivelHype;
    textoStatus.innerText = "Vibe: flopou...";
    corpo.style.backgroundColor = "#121212";
    corpo.style.filter = "none";
    displayContador.style.fontSize = "80px";
});