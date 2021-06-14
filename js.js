let velC;
let controlFood, timerC;
let lifeRuffles, pointLost;
let cont_derrot, frames_derrota, opacity_derr;
let vitoria, derrota;
let slider, imgAtual, maxImg, tmp;
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
    imgs[i].src = 'img/skin' + skin + '.png';
    skin++;
  }
  if (i == 5) {
    imgs;
  }
}

function loadSlides(img) {
  slider.style.background = 'url(' + imgs[img].src + ')no-repeat';
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
  player = document.getElementById('ruffles');

  dirx = diry = 0;
  velC = 4;
  jogx = 225;

  clearInterval(timerC);

  lifeRuffles = 200;
  totalFood = 80;

  qtdFood = totalFood;

  auxa = (qtdFood * 15) / 100;
  pointLost = lifeRuffles - auxa;
  timerC = setInterval(criarComida, 1000);

  idt_cont = 0;
  idb_cont = 0;
  cont_derrot = 1;
  opacity_derr = 0.8;

  derrota = false;
  vitoria = false;

  document.querySelector('#btnReset').removeAttribute('disabled');
  loopJogo();
}

function loopJogo() {
  if (vitoria == false && derrota == false) {
    if (playing) {
      controleComida();
      if (qtdFood == 0 && lifeRuffles > 0) {
        vitoria = true;
        playing = false;
      } else if (lifeRuffles == 0) {
        derrota = true;
        playing = false;
      }

      frames = requestAnimationFrame(loopJogo);
    }
  } else {
    document.querySelector('#comida').innerHTML = '';

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

function criarComida() {
  if (playing) {
    let x = Math.random() * 943;
    let y = 0;

    x = parseInt(x);

    let screenFood = document.getElementById('comida');
    screenFood.innerHTML += `<div class="comida" style="background-position: ${x}px ${y}px;"></div>`;
    totalFood--;
  }
}
/*
function preReload() {
  var skin = 1;
  for (var i = 0; i < 5; i++) {
    imgs[i] = new Image();
    imgs[i].src = 'img/skin' + skin + '.png';
    skin++;
  }
  if (i == 5) {
    imgs;
  }
}

function loadSlides(img) {
  slider.style.background = 'url(' + imgs[img].src + ')no-repeat';
  slider.style.backgroundPosition = 'center';
}
*/
function controleComida() {
  controlFood = document.getElementsByClassName('comida');
  let qtdb = controlFood.length;

  for (var i = 0; i < qtdb; i++) {
    if (controlFood[i]) {
      let pb = controlFood[i].style.backgroundPosition;
      esp = pb.indexOf(' ');

      let x = parseInt(pb.slice(0, esp).replace('px', ''));
      let y = parseInt(pb.slice(esp, pb.length).replace('px', ''));

      y += velC;

      controlFood[i].style.backgroundPosition = `${x}px ${y}px`;

      if (y > 847) {
        lifeRuffles -= pointLost;

        if (lifeRuffles < 1) {
          lifeRuffles = 0;
        }
        let rufinho = document.querySelector('#life');
        rufinho.style.width = `${lifeRuffles}px`;
        controlFood[i].remove();
      }
    }
  }
}
