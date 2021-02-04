import { removeInitialAnimations } from "./modules/remove-initial-animations.js";
import { sectionOnOpen } from "./modules/section-on-open.js";
import { sectionOnClose } from "./modules/section-on-close.js";
import { getAllSections } from "./modules/get-all-sections.js";

const sections = {};
getAllSections(sections, '.section');

const bgImage = document.querySelector('.background > .image');
const header = document.querySelector('.header');
const headerInner = header.querySelector('.inner');
const innerContainer = header.querySelector('.inner-container');
const nav = header.querySelector('.navigation');
const sectionsContainer = document.querySelector('.sections-container');

removeInitialAnimations({
  'init-anim-inner-container': innerContainer,
  'init-anim-inner': headerInner,
});
sectionOnOpen({ sections, header, bgImage, nav });
sectionOnClose({ sections, header, bgImage, sectionsContainer });
