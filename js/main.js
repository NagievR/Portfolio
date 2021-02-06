import { removeInitialAnimations } from "./modules/remove-initial-animations.js";
import { sectionOnOpen } from "./modules/section-on-open.js";
import { sectionOnClose } from "./modules/section-on-close.js";
import { getAllSections } from "./modules/get-all-sections.js";

const classNames = {
  initAnimInner: 'init-anim-inner',
  sectionWrap: 'section-wrap',
  mainContainer: 'main-container',
  closeSection: 'close-section',
  moveBgImageToBack: 'move-bg-image-to-back',
  moveHeaderToBack: 'move-header-to-back',
};

const elems = {
  sections: getAllSections('.' + classNames.sectionWrap),
  bgImage: document.querySelector('.background > .image'),
  header: document.querySelector('.header'),
  headerInner: document.querySelector('.inner'),
  nav: document.querySelector('.navigation'),
  sectionsContainer: document.querySelector('.sections-container'),
};

removeInitialAnimations({ [classNames.initAnimInner]: elems.headerInner });
sectionOnOpen({ classNames, elems });
sectionOnClose({ classNames, elems });
