// cancel animations on toggling from display none to its initial value

export const removeInitialAnimations = obj => {
  // originally this function removed more than one animations.
  // but I decided not to change this code for future possible additional animations

  const elements = Object.values(obj);
  const classNames = Object.keys(obj);

  const handleAnimEnd = event => {
    const elem = event.target;

    for (let className of classNames) {
      elem.classList.remove(className);
      elem.removeEventListener('animationend', handleAnimEnd);
    }
  }

  elements.forEach(elem => {
    elem.addEventListener('animationend', handleAnimEnd);
  });
}