const miniNavBar = document.querySelector('#mini-nav');
const panelMobile = document.querySelector('.panel');
const hamburguer = miniNavBar.children[0];

hamburguer.addEventListener('click', () => {
  if (!hamburguer.classList.contains('active')) {
    hamburguer.classList.add('active');
    hamburguer.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />'
    panelMobile.classList.remove('hidden');
  } else {
    hamburguer.classList.remove('active');
    hamburguer.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />'
    panelMobile.classList.add('hidden');
  }
})