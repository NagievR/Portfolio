const header = document.querySelector('.header');
const bgImage = document.querySelector('.background > .image');
const closeSection = document.querySelector('.close-section');

export const switchSection = () => { let s = null;

  const trEndHandler = () => { 
    section.style.display = '';
    header.style.display = '';
  
    setTimeout(() => {
      header.classList.remove('switch-section');
      bgImage.classList.remove('switch-section-bg-image'); 
    }, 20);
    
    console.log(new Date() - s);
  };
  
  const handleClick = () => {
    s = new Date();
    section.style.opacity = '0';
    setTimeout(trEndHandler, trDuration);
  }

  const handleKeydown = e => {
    if (e.key === 'Enter') {
      handleClick(e);
    }
  }
  
  const section = closeSection.closest('.section');
  const trDuration = parseFloat(getComputedStyle(section)['transitionDuration']) * 1000;

  closeSection.addEventListener('click', handleClick);
  section.addEventListener('keydown', handleKeydown);
}
