const bgImage = document.querySelector('.background > .image');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

export const switchSection = () => {
  document.onkeydown = e => {
    if (e.key !== 'Escape') return; // for testing

    header.style.display = '';
    setTimeout(() => {
      header.classList.remove('switch-page')
    }, 0);
    bgImage.classList.remove('switch-page-bg-image'); 
    footer.classList.remove('switch-page');
  }
}