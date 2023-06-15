const sec1Data = {
  set1: [
    {
      article: {
        h2: 'Transform your brand',
        p: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
      },
      picture: {
        mobile: 'images/mobile/image-transform.jpg',
        desktop: 'images/desktop/image-transform.jpg'
      }
    },
    {
      article: {
        h2: 'Stand out to the right audience',
        p: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
      },
      picture: {
        mobile: 'images/mobile/image-stand-out.jpg',
        desktop: 'images/desktop/image-stand-out.jpg'
      }
    }
  ],
  set2: [
    {
      img: {
        mobile: 'images/mobile/image-graphic-design.jpg',
        desktop: 'images/desktop/image-graphic-design.jpg'
      },
      h2: 'Graphic design',
      p: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
    },
    {
      img: {
        mobile: 'images/mobile/image-photography.jpg',
        desktop: 'images/desktop/image-photography.jpg'
      },
      h2: 'Photography',
      p: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
    }
  ]
}

const sec1Wrapper = document.querySelector('.sec1');
const sec1Wrappers = Array.from(sec1Wrapper.children);
let sec1Set1Html = ''; 

sec1Data.set1.forEach(set => {
  sec1Set1Html += `
  <li>
    <picture>
      <source media="(max-width:40rem)" srcset="${set.picture.mobile}">
      <source media="(min-width:40rem)" srcset="${set.picture.desktop}">
      <img src="">
    </picture>
    <article>
      <div class="inner-container">
        <h2>${set.article.h2}</h2>
        <p>${set.article.p}</p>
        <a href="#">Learn More</a>
      </div>
    </article>
  </li>
  `
})

sec1Wrappers[0].innerHTML = sec1Set1Html;
let sec1Set2Html = ''; 

sec1Data.set2.forEach(set => {
  sec1Set2Html += `
  <li>
    <picture>
      <source media="(max-width:40rem)" srcset="${set.img.mobile}">
      <source media="(min-width:40rem)" srcset="${set.img.desktop}">
      <img src="">
    </picture>
    <figcaption>
      <h2>${set.h2}</h2>
      <p>${set.p}</p>
    </figcaption>
  </li>
  `
})
sec1Wrappers[1].innerHTML = sec1Set2Html;
