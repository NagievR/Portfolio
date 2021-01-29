export const removeInitialAnim = (elem, className) => {
  
  const handleAnimEnd = () => {
    elem.classList.remove(className);
    elem.removeEventListener('animationend', handleAnimEnd);
  }

  elem.addEventListener('animationend', handleAnimEnd);
}