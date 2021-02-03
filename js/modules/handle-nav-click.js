const bgImage = document.querySelector('.background > .image');
const header = document.querySelector('.header');
const nav = header.querySelector('.navigation');

const about = document.getElementById('about');

export const handleNavClick = () => {

  const switchToSection = () => {
    header.style.display = 'none';
    about.style.display = 'block';
    
    setTimeout(() => {
      about.style.opacity = '1';
    }, 20);
    
    bgImage.removeEventListener('transitionend', switchToSection);
  };
    
  const moveAllToBack = e => {
    if (e.target.tagName !== 'LI') {
      return;
    }
    header.classList.add('move-header-to-back');
    bgImage.classList.add('move-bg-image-to-back'); 
    bgImage.addEventListener('transitionend', switchToSection);
  };
  
  const handleKeydown = e => { 
    if (e.key === 'Enter') {
      console.dir(e.target)
      moveAllToBack(e);
    }
  };

  nav.addEventListener('click', moveAllToBack);
  nav.addEventListener('keydown', handleKeydown);

};