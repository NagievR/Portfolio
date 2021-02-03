const bgImage = document.querySelector('.background > .image');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const about = document.getElementById('about');

const sectionsContainer = document.querySelector('.sections-container');
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
    const duration = parseFloat(getComputedStyle(section)['transitionDuration']) * 1000;
    setTimeout(trEndHandler, duration);
  }

  const handleKeydown = e => { 
    if (e.key === 'Enter') {
      handleClick(e);
    }
  }
  
  const section = closeSection.closest('.section');
  section.addEventListener('keydown', handleKeydown);
  closeSection.addEventListener('click', handleClick);
}
