const bgImage = document.querySelector('.background > .image');
const header = document.querySelector('.header');
const nav = header.querySelector('.navigation');
const footer = document.querySelector('.footer');

export let didAnimationEnd = true;

export const handleNavClick = () => {

  const trEndHandler = () => {
    header.style.display = 'none';
    didAnimationEnd = true;
    bgImage.removeEventListener('transitionend', trEndHandler);
  }

  const handleClick = event => {
    if (event.target.tagName !== 'A' || !didAnimationEnd) {
      return;
    }
    didAnimationEnd = false;

    bgImage.classList.add('switch-section-bg-image'); 
    header.classList.add('switch-section');
    footer.classList.add('switch-section');
  
    bgImage.addEventListener('transitionend', trEndHandler);
  }

  nav.addEventListener('click', handleClick);
}