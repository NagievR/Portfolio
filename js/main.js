import { removeAnimationClass } from "./modules/remove-animation-class.js"; 

const header = document.querySelector('.header');
const headerInner = header.querySelector('.inner');
const innerContainer = header.querySelector('.inner-container');

removeAnimationClass({
  'init-anim-inner-container': innerContainer,
  'init-anim-inner': headerInner,
});
