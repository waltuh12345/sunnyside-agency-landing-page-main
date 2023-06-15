
const stopPropagation = elem => {
  elem.addEventListener('click', e => {
    e.stopPropagation();
  })
}

const addActive = (elem1,elem2) => {
  elem1.classList.toggle('active');
  elem2.classList.toggle('active');
}

const removeActive = (toggle,content) => {
  toggle.classList.remove('active');
  content.classList.remove('active');
}

