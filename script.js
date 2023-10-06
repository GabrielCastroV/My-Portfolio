const miniNavBar = document.querySelector('#mini-nav');
const panelMobile = document.querySelector('.panel');
const hamburguer = miniNavBar.children[0];

panelMobile.addEventListener('click', () => {
    if (hamburguer.classList.contains('active')) {
        hamburguer.classList.remove('active');
        panelMobile.classList.add('hidden');
        miniNavBar.style.backgroundColor = 'transparent'
    }
})  

hamburguer.addEventListener('click', e => {
    e.preventDefault();
    if (!hamburguer.classList.contains('active')) {
        hamburguer.classList.add('active');
        panelMobile.classList.remove('hidden');
        miniNavBar.style.backgroundColor = '#6bddca'
    } else {
        hamburguer.classList.remove('active');
        panelMobile.classList.add('hidden');
        miniNavBar.style.backgroundColor = 'transparent'
  }
})