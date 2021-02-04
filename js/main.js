import { removeAnimationClass } from "./modules/remove-animation-class.js";
import { sectionOnOpen } from "./modules/section-on-open.js";
import { sectionOnClose } from "./modules/section-on-close.js";

const bgImage = document.querySelector('.background > .image');

const header = document.querySelector('.header');
const headerInner = header.querySelector('.inner');
const innerContainer = header.querySelector('.inner-container');
const nav = header.querySelector('.navigation');

const sectionsContainer = document.querySelector('.sections-container');
const sections = {
  'about': document.getElementById('about'),
  'skills': document.getElementById('skills'),
  'projects': document.getElementById('projects'),
  'contacts': document.getElementById('contacts'),
};

removeAnimationClass({
  'init-anim-inner-container': innerContainer,
  'init-anim-inner': headerInner,
});
sectionOnOpen({ sections, header, bgImage, nav });
sectionOnClose({ sections, header, bgImage, sectionsContainer });
