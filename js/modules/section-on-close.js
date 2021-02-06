const getTransitionDurationMs = elem => {
  return parseFloat(getComputedStyle(elem)['transitionDuration']) * 1000;
}

export const sectionOnClose = ({
    sections, header, bgImage, sectionsContainer 
  }) => {

  const closeEventHandler = () => {
    chosenSection.style.opacity = '0';
    const duration = getTransitionDurationMs(chosenSection);
    setTimeout(transitionEndHandler, duration);
  };

  const transitionEndHandler = () => { 
    chosenSection.style.display = '';
    header.style.display = '';
  
    setTimeout(() => {
      header.classList.remove('move-header-to-back');
      bgImage.classList.remove('move-bg-image-to-back'); 
    }, 20);
  };

  const handleClick = event => {
    const targ = event.target;
    const isBackground = targ.classList.contains('main-container');
    const isCloseBtn = targ.classList.contains('close-section');
    
    if (isBackground || isCloseBtn) {
      closeEventHandler();
    }
  };

  const waitUntilSectionOpens = event => {
    const targ = event.target;
    if (!targ.classList.contains('section')) {
      return;
    }
    chosenSection = sections[targ.id];

    document.body.addEventListener('click', handleClick);

    chosenSection.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        closeEventHandler();
      }
    });
  };

  let chosenSection = null;

  sectionsContainer.addEventListener('transitionend', waitUntilSectionOpens);

};
