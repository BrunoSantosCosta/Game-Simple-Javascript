let dirxJ, velJ, pjx;
let tamTelaW, tamTelaH;
let jogo;
let frames;
let contComidas, painelContComidas, velC, tmpCriaComida;
let comidasTotal;
let vidaRuffles;

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

function criaComida() {
  if (jogo) {
    let y = 0;
    let x = Math.random() * tamTelaW;
    let comida = document.createElement('div');
    let att1 = document.createAttribute('class');
    let att2 = document.createAttribute('style');
    att1.value = 'comida';
    att2.value = 'top:' + y + 'px;left:' + x + 'px;';
    comida.setAttributeNode(att1);
    comida.setAttributeNode(att2);
    document.body.appendChild(comida);
    contComidas--;
  }
}

function controlaComida() {
  comidasTotal = document.getElementsByClassName('comida');
  let tam = comidasTotal.length;
  for (var i = 0; i < tam; i++) {
    if (comidasTotal[i]) {
      let pi = comidasTotal[i].offsetTop;
      pi += velC;
      comidasTotal[i].style.top = pi + 'px';
      if (pi > tamTelaH) {
        vidaRuffles -= 10;
        comidasTotal[i].remove();
      }
    }
  }
}

function gameLoop() {
  if (jogo) {
    controlaJogador();
    controlaComida();
    criaComida();
  }
  frames = requestAnimationFrame(gameLoop);
}

function play() {
  jogo = true;

  //ini tela
  tamTelaW = window.innerWidth;
  tamTelaH = window.innerHeight;
  //controle das comidas caindo
  clearInterval(tmpCriaComida);
  contComidas = 150;
  velC = 3;
  tmpCriaComida = setInterval(criaComida, 1700);

  //controles do ruffles
  vidaRuffles = 300;

  gameLoop();
}

window.addEventListener('load', play);
