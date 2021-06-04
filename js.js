let dirxJ, velJ, pjx;
let tamTelaW, tamTelaH;
let jogo;
let frames;

function controlaJogador() {
  let obj = document.getElementById('ruffles');
  let px = 0;
  window.addEventListener('keydown', (e) => {
    let tecla = e.key;
    if (tecla == 'ArrowRight') {
      px += 30;

      obj.style.transform = `translateX(${px}px)`;
    } else if (tecla == 'ArrowLeft') {
      px -= 30;
      obj.style.transform = `translateX(${px}px)`;
    } else {
    }
  });
  gameLoop();
}
function criaComidas() {
  let comidas_na_tela = document.getElementsByClassName('food');
  comidas_na_tela = comidas_na_tela.length;
  if (jogando && bmb_totais > 0 && bombas_na_tela < 5) {
    let x = Math.random() * 440;
    let y = -60;
    x = parseInt(x);

    let tela_comida = document.getElementsByClassName('food');
    tela_comida.innerHTML += `<div class="food" style="background-position: ${x}px ${y}px;"></div>`;
  }
}

function gameLoop() {
  if (jogo) {
    controlaJogador();
  }
  frames = requestAnimationFrame(gameLoop);
}

function play() {
  jogo = true;

  gameLoop();
}

window.addEventListener('load', play);
tamTelaW = window.innerWidth;
