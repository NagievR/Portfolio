const header = document.querySelector('.header');
const bgImage = document.querySelector('.background > .image');
const closeSection = document.querySelector('.close-section');
const mainContainer = document.querySelector('.main-container');

export const switchSection = () => {

  const transitionEndHandler = () => { 
    section.style.display = '';
    header.style.display = '';
  
    setTimeout(() => {
      header.classList.remove('switch-section');
      bgImage.classList.remove('switch-section-bg-image'); 
    }, 20);

    mainContainer.removeEventListener('click', handleClick);
    section.removeEventListener('keydown', handleKeydown);
  };

  const handleCloseEvent = () => {
    section.style.opacity = '0';
    const duration = parseFloat(getComputedStyle(section)['transitionDuration']) * 1000;
    setTimeout(transitionEndHandler, duration);
  }
  
  const handleClick = e => {
    const targ = e.target;
    const isBackground = targ.classList.contains('main-container');
    const isCloseBtn = targ.classList.contains('close-section');
    if (isBackground || isCloseBtn) {
      handleCloseEvent();
    }
  }

  const handleKeydown = e => {
    if (e.key === 'Enter') {
      handleCloseEvent();
    }
  }
  
  const blockOnOpen = () => {
    mainContainer.addEventListener('click', handleClick);
    section.addEventListener('keydown', handleKeydown);
  }

  const section = closeSection.closest('.section');

  section.addEventListener('transitionend', blockOnOpen);
}
