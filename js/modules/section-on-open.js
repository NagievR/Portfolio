export const sectionOnOpen = ({ 
    sections, header, nav, bgImage, headerInner 
  }) => {

  const switchToSection = () => {
    header.style.display = 'none';
    chosenSection.style.display = 'block';
    
    setTimeout(() => {
      chosenSection.style.opacity = '1';
    }, 20);
    
    bgImage.removeEventListener('transitionend', switchToSection);
  };

  const moveAllToBack = event => {
    if (event.target.tagName !== 'LI') {
      return;
    }
    header.classList.add('move-header-to-back');
    bgImage.classList.add('move-bg-image-to-back'); 
    bgImage.addEventListener('transitionend', switchToSection);
  };

  const handleNavigationEvent = event => {
    if (!headerInner.classList.contains('init-anim-inner')) {
      chosenSection = sections[event.target.dataset.sectionName];
      moveAllToBack(event);
    }
  };

  let chosenSection = null;
  
  nav.addEventListener('click', event => {
    handleNavigationEvent(event);
  });

  nav.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      handleNavigationEvent(event);
    }
  });

};