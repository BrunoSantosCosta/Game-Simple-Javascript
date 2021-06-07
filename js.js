let velC;
let qtd_comidas, comidas_total, intv_cria;
let vida_ruffles, pnt_perda, cmd_perda;
let barra_comida_w, cont_derrot, frames_derrota, opacity_derr;
let vitoria, derrota;

function play() {
  let tela_ini = document.querySelector('.background');
  let btns_ini = document.querySelector('#btnsHome');
  let tela_jogo = document.querySelector('#screenGame');
  let btns_jogo = document.querySelector('#btnsGame');

  tela_ini.style.animationName = 'ani-tela-ini';
  btns_ini.style.animationName = 'ani-btns-ini';

  setTimeout(function () {
    document.querySelector('.sectionHome').className = 'd-none';
    document.querySelector('#game').className = '';
    tela_jogo.style.animationName = 'ani-tela-jogo';
    btns_jogo.style.animationName = 'ani-btns-jogo';

    document.getElementById('contagem').innerHTML = '1';

    setTimeout(function () {
      document.getElementById('contagem').innerHTML = '2';

      setTimeout(function () {
        document.getElementById('contagem').innerHTML = '3';

        setTimeout(function () {
          document.getElementById('contagem').style.display = 'none';
          jogando = true;
          iniciarJogo();
        }, 1000);
      }, 1000);
    }, 1000);
  }, 400);
}

function iniciarJogo() {
  jogador = document.getElementById('ruffles');

  dirx = diry = 0;
  velC = 4;
  jogx = 225;
  jogy = 400;

  clearInterval(intv_cria);

  vida_ruffles = 200;
  cmd_totais = 80;
  cmd_perda = barra_comida_w / cmd_totais;

  qtd_comidas = cmd_totais;

  auxa = (qtd_comidas * 15) / 100;
  pnt_perda = vida_ruffles / auxa;
  intv_cria = setInterval(criarComida, 1);

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
    if (jogando) {
      controleComida();
      if (qtd_comidas == 0 && vida_ruffles > 0) {
        vitoria = true;
        jogando = false;
      } else if (vida_ruffles == 0) {
        derrota = true;
        jogando = false;
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
  let comidasCaindo = document.getElementsByClassName('comida');
  comidasCaindo = comidasCaindo.length;

  if (jogando && cmd_totais > 0 && comidasCaindo < 5) {
    let x = Math.random() * 943;
    let y = 0;

    x = parseInt(x);

    let comidaTela = document.getElementById('comida');
    comidaTela.innerHTML += `<div class="comida" style="background-position: ${x}px ${y}px;"></div>`;
    cmd_totais--;
  }
}

function controleComida() {
  comidas_total = document.getElementsByClassName('comida');
  let qtdb = comidas_total.length;

  for (var i = 0; i < qtdb; i++) {
    if (comidas_total[i]) {
      let pb = comidas_total[i].style.backgroundPosition;
      esp = pb.indexOf(' ');

      let x = parseInt(pb.slice(0, esp).replace('px', ''));
      let y = parseInt(pb.slice(esp, pb.length).replace('px', ''));

      y += velC;

      comidas_total[i].style.backgroundPosition = `${x}px ${y}px`;

      if (y > 500) {
        vida_ruffles -= pnt_perda;

        if (vida_ruffles < 1) {
          vida_ruffles = 0;
        }
        let rufinho = document.querySelector('#life');
        rufinho.style.width = `${vida_ruffles}px`;
        comidas_total[i].remove();

        qtd_comidas--;
      }
    }
  }
}
