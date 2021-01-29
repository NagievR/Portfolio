'use strict';

const nav = document.querySelector('.navigation > ul');
const background = document.querySelector('.background > .image');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

let didAnimationEnd = true;

const trEndHandler = () => {
  console.log('ended');
  header.style.visibility = 'none';
  didAnimationEnd = true;
  background.removeEventListener('transitionend', trEndHandler);
}

const handleClick = event => {
  if (event.target.tagName !== 'A' || !didAnimationEnd) {
    console.log('nope');
    return;
  }
  didAnimationEnd = false;
  background.classList.add('zoom'); 
  header.classList.add('zoom-header');
  footer.classList.add('zoom-header');

  console.log('ok, lets do it');

  background.addEventListener('transitionend', trEndHandler);
}

nav.addEventListener('click', handleClick);



btn.onclick = () => {
  header.style.visibility = '';
  background.classList.remove('zoom'); 
  header.classList.remove('zoom-header');
  footer.classList.remove('zoom-header');


  console.log(header.style.display);
}