const numeroDeCapitulos = 10;
const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const audioDoCapitulo = document.getElementById('audio-capitulo');
const nomeDoCapitulo = document.getElementById('capitulo');
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioDoCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')
}

function pausarFaixa() {
    audioDoCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
    botaoPlayPause.classList.add('bi-play-circle-fill')
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else if (taTocando === 1) {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeDaFaixa() {
    nomeDoCapitulo.innerText = 'Capítulo '  + capituloAtual;
}

function proximaFaixa() {
    if (capituloAtual === numeroDeCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual += 1;
    }

    audioDoCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeDaFaixa();
}

function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = numeroDeCapitulos;
    } else {
        capituloAtual -= 1;
    }

    audioDoCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeDaFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
audioDoCapitulo.addEventListener("ended", proximaFaixa);
