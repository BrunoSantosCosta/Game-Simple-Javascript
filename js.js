const imgs = document.getElementsByTagName('img');

function mostrar() {
  for (var i = 0; i < imgs.length; i++) {
    if (imgs[i].style.display == 'none' || imgs[i].style.display == '') {
      imgs[i].style.display = 'inline-block';
      break;
    }
  }
}

function apagar() {
  for (var i = imgs.length - 1; i >= 0; i--) {
    if (imgs[i].style.display == 'inline-block') {
      imgs[i].style.display = 'none';
      break;
    }
  }
}
