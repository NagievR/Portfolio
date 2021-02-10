const getTransitionDurationMs = elem => {
  // I decided to use timeout instead of 'transitionend'. 
  // I found it more accurate
  return parseFloat(getComputedStyle(elem)['transitionDuration']) * 1000;
}

export const sectionOnClose = ({ classNames, elems }) => {

  const closeEventHandler = () => {
    chosenSection.style.opacity = '0';
    const duration = getTransitionDurationMs(chosenSection);
    setTimeout(transitionEndHandler, duration);
    chosenSection.removeEventListener('click', handleClick);
  };

  const transitionEndHandler = () => { 
    chosenSection.style.display = '';
    elems.header.style.display = '';
  
    setTimeout(() => {
      elems.header.classList.remove(classNames.moveHeaderToBack);
      elems.bgImage.classList.remove(classNames.moveBgImageToBack); 
    }, 20);
  };

  const handleClick = event => {
    if (event.target.classList.contains(classNames.closeSection)) {
      closeEventHandler();
    }
  };

  const waitUntilSectionOpens = event => {
    const targ = event.target;
    if (!targ.classList.contains(classNames.sectionWrap)) {
      return;
    }
    chosenSection = elems.sections[targ.id];

    chosenSection.addEventListener('click', handleClick);
    chosenSection.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        closeEventHandler();
      }
    });
  };

  let chosenSection = null;

  elems.sectionsContainer.addEventListener(
    'transitionend', waitUntilSectionOpens
  );
};
