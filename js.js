function invisivel(elements) {
  const display = document.getElementById(elements).style.display;
  if (display == 'none') {
    document.getElementById(elements).style.display = 'none';
  } else document.querySelector('.inicio').style.display = 'none';
  document.getElementById(elements).style.display = 'block';
}

function play() {
  const score = 0;
  const jogadorVida = 4;
  const posicaoX1 = parseInt(Math.random() * 1250);
  const posicaoX2 = parseInt(Math.random() * 1250);
  const posicaoX3 = parseInt(Math.random() * 1250);
  const posicaoX4 = parseInt(Math.random() * 1250);
  const posicaoX5 = parseInt(Math.random() * 1250);
  const posicaoX6 = parseInt(Math.random() * 1250);
  const posicaoX7 = parseInt(Math.random() * 1250);
  const velocidade = 3;

  const game = {};
  game.pressionou = [];

  let obj = document.getElementById('ruffles');
  let px = 0;
  window.addEventListener('keydown', (e) => {
    let tecla = e.key;
    switch (tecla) {
      case 'ArrowRight':
        px += 80;

        obj.style.transform = `translateX(${px}px)`;
        break;
      case 'ArrowLeft':
        px -= 80;
        obj.style.transform = `translateX(${px}px)`;
        break;
    }
  });

  function loop() {
    moveJogador();
    moveComida1();
    moveComida2();
    //moveComida3();
    //moveComida4();
    moveVeneno1();
    moveVeneno2();
    colisao();
    pontos();
    vida();
  }

  function moveComida1() {
    const posicaoY = parseInt(document.getElementById('comida1').style.top);
    document.getElementById('comida1', posicaoY + velocidade).style.top;
    document.getElementById('comida1', posicaoX1).style.left;

    if (posicaoY >= 630) {
      posicaX1 = parseInt(Math.random() * 1250);
      document.getElementById('comida1', 10).style.top;
      document.getElementById('comida1', posicaoX1).style.left;

      score = score - 50;
    }
  }
}
