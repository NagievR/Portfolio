export const removeInitialAnimations = obj => {

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