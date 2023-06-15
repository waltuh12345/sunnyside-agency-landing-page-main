const dataSetSec2 = [
  {
    img: 'images/image-emily.jpg',
    p: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    info: {
      name: 'Emily R.',
      position: 'Marketing Director'
    }
  },
  {
    img: 'images/image-thomas.jpg',
    p: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    info: {
      name: 'Thomas S.',
      position: 'Chief Operating Officer'
    }
  },
  {
    img: 'images/image-jennie.jpg',
    p: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    info: {
      name: 'Jennie F.',
      position: 'Business Owner'
    }
  }
]

let sec2Html = ''
dataSetSec2.forEach(set => {
  sec2Html += `
  <li>
    <picture>
      <img src="${set.img}" alt="">
    </picture>
    <p>${set.p}</p>
    <div class="info">
      <h4>${set.info.name}</h4>
      <span>${set.info.position}</span>
    </div>
  </li>
  `
})

const sec2 = document.querySelector('.sec2-container');
const sec2Carousel = sec2.querySelector('ul');

sec2Carousel.innerHTML = sec2Html;
