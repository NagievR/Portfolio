const bgImage = document.querySelector('.background > .image');
const header = document.querySelector('.header');
const nav = header.querySelector('.navigation');
const footer = document.querySelector('.footer');

export const handleNavClick = () => {

  const trEndHandler = () => {
    header.style.visibility = 'none';
    didAnimationEnd = true;
    bgImage.removeEventListener('transitionend', trEndHandler);
  }

  let didAnimationEnd = true;

  const handleClick = event => {
    if (event.target.tagName !== 'A' || !didAnimationEnd) {
      console.log('nope');
      return;
    }
    didAnimationEnd = false;

    console.log('ok');
    bgImage.classList.toggle('switch-page-bg-image'); 
    header.classList.toggle('switch-page');
    footer.classList.toggle('switch-page');
  
    bgImage.addEventListener('transitionend', trEndHandler);
  }

  nav.addEventListener('click', handleClick);
}