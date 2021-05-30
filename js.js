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

  const TECLA = {
    W: 87,
    S: 83,
    D: 68,
    A: 65,
    SD: 39,
    SE: 37,
  };

  const game = {};
  game.pressionou = [];

  function timer() {
    game.timer = setInterval(loop, 10);
  }
}
