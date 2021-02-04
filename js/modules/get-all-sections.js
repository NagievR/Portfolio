export const getAllSections = (obj, selector) => {
  document.querySelectorAll(selector).forEach(section => {
    obj[section.id] = section;
  });
};