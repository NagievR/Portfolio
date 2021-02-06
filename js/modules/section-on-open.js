export const sectionOnOpen = ({ classNames, elems }) => {

  const switchToSection = () => {
    elems.header.style.display = 'none';
    chosenSection.style.display = 'block';
    
    setTimeout(() => {
      chosenSection.style.opacity = '1';
    }, 20);
    
    elems.bgImage.removeEventListener('transitionend', switchToSection);
  };

  const moveAllToBack = event => {
    if (event.target.tagName !== 'LI') {
      return;
    }
    elems.header.classList.add(classNames.moveHeaderToBack);
    elems.bgImage.classList.add(classNames.moveBgImageToBack); 
    elems.bgImage.addEventListener('transitionend', switchToSection);
  };

  const handleNavigationEvent = event => {
    if (!elems.headerInner.classList.contains(classNames.initAnimInner)) {
      chosenSection = elems.sections[event.target.dataset.sectionName];
      moveAllToBack(event);
    }
  };

  let chosenSection = null;
  
  elems.nav.addEventListener('click', event => {
    handleNavigationEvent(event);
  });

  elems.nav.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      handleNavigationEvent(event);
    }
  });

};