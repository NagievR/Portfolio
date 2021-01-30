import { didAnimationEnd } from "./handle-nav-click.js";

const bgImage = document.querySelector('.background > .image');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

export const switchSection = () => {

  document.onkeydown = e => {
    if (e.key !== 'Escape' || !didAnimationEnd) {
      return;
    }; 
    header.style.display = '';

    setTimeout(() => {
      header.classList.remove('switch-section');
      bgImage.classList.remove('switch-section-bg-image'); 
      footer.classList.remove('switch-section');
    }, 0);
  }
}