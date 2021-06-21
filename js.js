let velC, getIngredient;
let timerC, timerC2, timerC3, timerC4;
let controlFood, controlFood2, controlFood3, controlFood4;
let lifeRuffles, score;
let vitoria, derrota;
let slider, imgAtual, maxImg, tmp;
let player;
let imgs = [];

function playPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.add('show');
  popup.addEventListener('click', (e) => {
    if (e.target.id == 'popup-instructions' || e.target.className == 'close') {
      popup.classList.remove('show');
      localStorage.closePopup = popupId;
    }
  });
}

playPopup('popup-instructions');

function preReload() {
  var skin = 1;
  for (var i = 0; i < 5; i++) {
    imgs[i] = new Image();
    imgs[i] = 'img/skin' + skin + '.png';
    skin++;
  }
  if (i == 5) {
    imgs;
  }
}

function loadSlides(img) {
  slider.style.background = 'url(' + imgs[img] + ')no-repeat';
  slider.style.backgroundPosition = 'center';
}

function go() {
  preReload();
  imgAtual = 0;
  maxImage = imgs.length - 1;
  slider = document.querySelector('.dvslider');
  loadSlides(imgAtual);
  tmp = setInterval(replacement, 2000);
}

function replacement() {
  imgAtual++;

  if (imgAtual > maxImg) {
    imgAtual = 0;
  }
  loadSlides(imgAtual);
}

window.addEventListener('load', go);

function play() {
  let screenHome = document.querySelector('.background');
  let btnsHome = document.querySelector('#btnsHome');
  let screenGame = document.querySelector('#screenGame');
  let btnsGame = document.querySelector('#btnsGame');

  screenHome.style.animationName = 'animationscreenHome';
  btnsHome.style.animationName = 'animatinBtnsHome';

  setTimeout(function () {
    document.querySelector('.sectionHome').className = 'd-none';
    document.querySelector('#game').className = '';
    screenGame.style.animationName = 'animationScreenGame';
    btnsGame.style.animationName = 'animationBtnsGame';

    document.getElementById('timer').innerHTML = '1';

    setTimeout(function () {
      document.getElementById('timer').innerHTML = '2';

      setTimeout(function () {
        document.getElementById('timer').innerHTML = '3';

        setTimeout(function () {
          document.getElementById('timer').style.display = 'none';
          playing = true;
          playGame();
        }, 1000);
      }, 1000);
    }, 1000);
  }, 400);
}

function playGame() {
  velC = 1;

  clearInterval(timerC);
  clearInterval(timerC2);
  clearInterval(timerC3);
  clearInterval(timerC4);

  lifeRuffles = 200;
  score = 0;

  timerC = setInterval(criarComida, 3500);
  timerC2 = setInterval(criarComidaDois, 3000);
  timerC3 = setInterval(criarComidaTres, 3000);
  timerC4 = setInterval(criarComidaQuatro, 3000);

  derrota = false;
  vitoria = false;

  document.querySelector('#btnReset').removeAttribute('disabled');
  loopJogo();
}

function loopJogo() {
  if (vitoria == false && derrota == false) {
    if (playing) {
      controleComida();
      controleComidaDois();
      controleComidaTres();
      controleComidaQuatro();

      if (lifeRuffles == 0) {
        derrota = true;
        playing = false;
      }

      frames = requestAnimationFrame(loopJogo);
    }
  } else {
    let jogo = document.querySelector('#jogo');
    let status = document.querySelector('#status');

    document.getElementById('tela-reslt').className = '';

    jogo.style.transition = '2s';
    status.style.transition = '2s';
    jogo.style.opacity = 0;
    status.style.opacity = 0;

    let ruffleGame = document.getElementById('ruffleGame-reslt');
    ruffleGame.style.background = 'url(img/skin4.png) no-repeat';
    ruffleGame.style.backgroundSize = '500px 500px';
    ruffleGame.style.backgroundPosition = '0px 500px';
    ruffleGame.style.transition = '4s';

    document.querySelector('#btnReset').setAttribute('disabled', 'disabled');

    if (vitoria) {
      setTimeout(function () {
        ruffleGame.style.backgroundPosition = '0px 0px';
        jogo.className = 'd-none';
        status.className += ' d-none';

        telaVitoria();
      }, 2000);
    } else if (derrota) {
      setTimeout(function () {
        ruffleGame.style.backgroundPosition = '0px 0px';
        status.style.transition = '';
        jogo.className += ' d-none';
        status.className += ' d-none';

        setTimeout(function () {
          ruffleGame.style.transition = '0s';
          telaDerrota();
        }, 4000);
      }, 2000);
    }
  }
}

let obj = document.getElementById('ruffles');
let px = 0;
let tecla;

window.addEventListener('keydown', (e) => {
  tecla = e.key;
  if (tecla == 'ArrowRight') {
    px += 30;

    obj.style.transform = `translateX(${px}px)`;
  } else if (tecla == 'ArrowLeft') {
    px -= 30;
    obj.style.transform = `translateX(${px}px)`;
  } else {
  }
});
window.addEventListener('keyup', (e) => {
  tecla = e.key;
  if (tecla == 'ArrowRight') {
    px == 0;

    obj.style.transform = `translateX(${px}px)`;
  } else if (tecla == 'ArrowLeft') {
    px == 0;
    obj.style.transform = `translateX(${px}px)`;
  } else {
  }
});

function criarComidaDois() {
  if (playing) {
    let x2 = Math.random() * 943;
    let y2 = 0;

    x2 = parseInt(x2);

    let screenFood2 = document.getElementById('ingredientTWO');
    screenFood2.innerHTML += `<div class="ingredientTWO" style="background-position: ${x2}px ${y2}px;"></div>`;
  }
}

function controleComidaDois() {
  controlFood2 = document.getElementsByClassName('ingredientTWO');
  let qtdb = controlFood2.length;
  for (var i = 0; i < qtdb; i++) {
    if (controlFood2[i]) {
      let pb2 = controlFood2[i].style.backgroundPosition;
      esp2 = pb2.indexOf(' ');

      let x2 = parseInt(pb2.slice(0, esp2).replace('px', ''));
      let y2 = parseInt(pb2.slice(esp2, pb2.length).replace('px', ''));

      y2 += velC;

      controlFood2[i].style.backgroundPosition = `${x2}px ${y2}px`;
    }
  }
}
function criarComidaTres() {
  if (playing) {
    let x3 = Math.random() * 943;
    let y3 = 0;

    x3 = parseInt(x3);

    let screenFood3 = document.getElementById('ingredientTHREE');
    screenFood3.innerHTML += `<div class="ingredientTHREE" style="background-position: ${x3}px ${y3}px;"></div>`;
  }
}

function controleComidaTres() {
  controlFood3 = document.getElementsByClassName('ingredientTHREE');
  let qtdb = controlFood3.length;

  for (var i = 0; i < qtdb; i++) {
    if (controlFood3[i]) {
      let pb3 = controlFood3[i].style.backgroundPosition;
      esp3 = pb3.indexOf(' ');

      let x3 = parseInt(pb3.slice(0, esp3).replace('px', ''));
      let y3 = parseInt(pb3.slice(esp3, pb3.length).replace('px', ''));

      y3 += velC;

      controlFood3[i].style.backgroundPosition = `${x3}px ${y3}px`;
      if (y3 > 500) {
        controlFood3[i].remove();
      }
    }
  }
}
function criarComidaQuatro() {
  if (playing) {
    let x4 = Math.random() * 943;
    let y4 = 0;

    x4 = parseInt(x4);

    let screenFood4 = document.getElementById('ingredientFOUR');
    screenFood4.innerHTML += `<div class="ingredientFOUR" style="background-position: ${x4}px ${y4}px;"></div>`;
  }
}

function controleComidaQuatro() {
  controlFood4 = document.getElementsByClassName('ingredientFOUR');
  let qtdb = controlFood4.length;

  for (var i = 0; i < qtdb; i++) {
    if (controlFood4[i]) {
      let pb4 = controlFood4[i].style.backgroundPosition;
      esp4 = pb4.indexOf(' ');

      let x4 = parseInt(pb4.slice(0, esp4).replace('px', ''));
      let y4 = parseInt(pb4.slice(esp4, pb4.length).replace('px', ''));

      y4 += velC;

      controlFood4[i].style.backgroundPosition = `${x4}px ${y4}px`;
      if (y4 > 500) {
        controlFood4[i].remove();
      }
    }
  }
}

function criarComida() {
  if (playing) {
    let x = Math.random() * 943;
    let y = 0;

    x = parseInt(x);

    let screenFood = document.getElementById('ingredientONE');
    screenFood.innerHTML += `<div class="ingredientONE" style="background-position: ${x}px ${y}px;"></div>`;
  }
}

function controleComida() {
  var player = document.getElementById('ruffles').getBoundingClientRect();
  var food = document.getElementById('ingredientONE').getBoundingClientRect();
  controlFood = document.getElementsByClassName('ingredientONE');
  var ptRuffles = [
    { x: player.left, y: player.top },
    { x: player.left + player.width, y: player.top },
    { x: player.left + player.width, y: player.top + player.height },
    { x: player.left, y: player.top + player.height },
  ];

  var ptFood = [
    { x: food.left, y: food.top },
    { x: food.left + food.width, y: food.top },
    { x: food.left + food.width, y: food.top + food.height },
    { x: food.left, y: food.top + food.height },
  ];
  console.log(ptFood);
  let qtdb = controlFood.length;

  for (var i = 0; i < qtdb; i++) {
    if (controlFood[i]) {
      let pb = controlFood[i].style.backgroundPosition;
      esp = pb.indexOf(' ');

      let x = parseInt(pb.slice(0, esp).replace('px', ''));
      let y = parseInt(pb.slice(esp, pb.length).replace('px', ''));

      y += velC;
      controlFood[i].style.backgroundPosition = `${x}px ${y}px`;

      /*
      if (
        (ptRuffles.x >= food.left &&
          ptRuffles.x <= food.left + food.width &&
          ptRuffles.y >= food.top &&
          ptRuffles.y <= food.top + food.height) ||
        (ptFood.x >= player.left &&
          ptFood.x <= player.left + player.width &&
          ptFood.y >= player.top &&
          ptFood.y <= player.top + player.height)
      ) {
        alert('deu bom');
      }
      */
    }
  }
}
