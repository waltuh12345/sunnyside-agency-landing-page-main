const main = document.querySelector('#hero');
const menuToggle = main.querySelector('.menu-toggle');
const mainNav = main.querySelector('nav');
const mainNavUl = mainNav.querySelector('ul');

window.addEventListener('click', e => {
  let target = e.target;
  if (target === menuToggle) {
    addActive(menuToggle,mainNav);
  } else {
    stopPropagation(mainNavUl);
    removeActive(menuToggle,mainNav);
  }
})


