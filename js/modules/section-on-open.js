export const sectionOnOpen = ({ sections, header, nav, bgImage }) => {

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
  
  const handleKeydown = event => { 
    if (event.key === 'Enter') {
      chosenSection = sections[event.target.dataset.sectionName];
      moveAllToBack(event);
    }
  };

  const handleClick = event => {
    chosenSection = sections[event.target.dataset.sectionName];
    moveAllToBack(event);
  }

  let chosenSection = null;
  
  nav.addEventListener('click', handleClick);
  nav.addEventListener('keydown', handleKeydown);

};