const header = document.querySelector('.header');
const bgImage = document.querySelector('.background > .image');
const closeSection = document.querySelector('.close-section');
const mainContainer = document.querySelector('.main-container');

const getTransitionDurationMs = elem => {
  return parseFloat(getComputedStyle(elem)['transitionDuration']) * 1000;
}

export const switchSection = () => {

  const section = closeSection.closest('.section');

  const waitUntilSectionOpens = () => {
    mainContainer.addEventListener('click', handleClick);
    section.addEventListener('keydown', handleKeydown);
  };

  section.addEventListener('transitionend', waitUntilSectionOpens);

  const handleClick = event => {
    const targ = event.target;
    const isBackground = targ.classList.contains('main-container');
    const isCloseBtn = targ.classList.contains('close-section');
    
    if (isBackground || isCloseBtn) {
      closeEventHandler();
    }
  };

  const handleKeydown = event => {
    if (event.key === 'Enter') {
      closeEventHandler();
    }
  };

  const closeEventHandler = () => {
    section.style.opacity = '0';
    const duration = getTransitionDurationMs(section);
    setTimeout(transitionEndHandler, duration);
  };

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

}
