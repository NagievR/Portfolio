export const getAllSections = selector => {

  const sections = {};

  document.querySelectorAll(selector).forEach(section => {
    sections[section.id] = section;
  });
  
  return sections;
};