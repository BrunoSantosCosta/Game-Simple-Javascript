function invisivel(elements) {
  const display = document.getElementById(elements).style.display;
  if (display == 'none') {
    document.getElementById(elements).style.display = 'none';
  } else document.querySelector('.inicio').style.display = 'none';
  document.getElementById(elements).style.display = 'block';
}

function play() {
  var score = 0;
  var jogadorVida = 4;
  var posicaoX1 = parseInt(Math.random() * 1250);
  var posicaoX2 = parseInt(Math.random() * 1250);
  var posicaoX3 = parseInt(Math.random() * 1250);
  var posicaoX4 = parseInt(Math.random() * 1250);
  var posicaoX5 = parseInt(Math.random() * 1250);
  var posicaoX6 = parseInt(Math.random() * 1250);
  var posicaoX7 = parseInt(Math.random() * 1250);
  var velocidade = 3;

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

  function criaComida() {
    if (play) {
      var y = 0;
      var x = Math.random() * 1250;
      var comida = document.createElementNS('');
    }
  }
}
