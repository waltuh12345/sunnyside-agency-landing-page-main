const footerData = {
  links: [
    {
      link: 'About' 
    },
    {
      link: 'Service' 
    },
    {
      link: 'Projects' 
    }
  ],
  socialIcons: [
    {
      img: 'images/icon-facebook.svg',
      iconName: 'facebook'
    },
    {
      img: 'images/icon-instagram.svg',
      iconName: 'insta'
    },
    {
      img: 'images/icon-twitter.svg',
      iconName: 'twitter'
    },
    {
      img: 'images/icon-pinterest.svg',
      iconName: 'pinterest'
    },
  ]
}

const footer = document.querySelector('footer');
const footerLinks = footer.querySelector('.links');
const icon = footer.querySelector('.icons');

let footerHtml = '';
footerData.links.forEach(link => {
  footerHtml += `
    <li><a href="#">${link.link}</a></li>
  `
})

let footerIconHtml = '';
footerData.socialIcons.forEach(icon => {
  const {img,iconName} = icon
  footerIconHtml += `
    <li><a href="#"><img src="${img}" alt="${iconName}"></a></li>
  `
})

footerLinks.innerHTML = footerHtml;
icon.innerHTML = footerIconHtml;