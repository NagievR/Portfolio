const bgImage = document.querySelector('.background > .image');
const header = document.querySelector('.header');
const nav = header.querySelector('.navigation');
const footer = document.querySelector('.footer');

const about = document.getElementById('about');
const skills = document.getElementById('skills');
const sections = document.querySelector('.sections-container');

export const handleNavClick = () => {

  const trEndHandler = () => {
    header.style.display = 'none';
    about.style.display = 'block';
    
    setTimeout(() => {
      about.style.opacity = '1';
    });

    bgImage.removeEventListener('transitionend', trEndHandler);
  }

  const handleClick = e => {
    if (e.target.tagName !== 'LI') {
      return;
    }
    bgImage.classList.add('switch-section-bg-image'); 
    header.classList.add('switch-section');

    bgImage.addEventListener('transitionend', trEndHandler);
  }

  const handleKeydown = e => { 
    if (e.key === 'Enter') {
      handleClick(e);
    }
  }

  nav.addEventListener('click', handleClick);
  nav.addEventListener('keydown', handleKeydown);
}