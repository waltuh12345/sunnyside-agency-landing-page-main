const dataSec3 = [
  {
    img: {
      mobile: 'images/mobile/image-gallery-milkbottles.jpg',
      desktop: 'images/desktop/image-gallery-milkbottles.jpg'
    }
  },
  {
    img: {
      mobile: 'images/mobile/image-gallery-orange.jpg',
      desktop: 'images/desktop/image-gallery-orange.jpg'
    }
  },
  {
    img: {
      mobile: 'images/mobile/image-gallery-cone.jpg',
      desktop: 'images/desktop/image-gallery-cone.jpg'
    }
  },
  {
    img: {
      mobile: 'images/mobile/image-gallery-sugar-cubes.jpg',
      desktop: 'images/desktop/image-gallery-sugarcubes.jpg'
    }
  }
]

let sec3Html = '';
dataSec3.forEach(set => {
  sec3Html += `
  <li>
    <picture>
      <source media="(max-width:40rem)" srcset="${set.img.mobile}">
      <source media="(min-width:40rem)" srcset="${set.img.desktop}">
      <img src="">
    </picture>
  </li>
  `
})
const sec3 = document.querySelector('.sec3');
sec3.innerHTML = sec3Html;