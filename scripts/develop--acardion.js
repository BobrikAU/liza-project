const sidebarAccordion = document.querySelectorAll('.sidebar__acardion'),
      sidebarArrow = document.querySelectorAll('.sidebar__arrow');

function addClass (when, what) {
  when.classList.toggle(what);
}

for (let i = 0; i < sidebarArrow.length; i++) {
  sidebarArrow[i].addEventListener('click', () =>{
    addClass(sidebarArrow[i], 'sidebar__arrow_open');
    if (sidebarAccordion[i].style.height === "0px") {
      sidebarAccordion[i].style.height = `${ sidebarAccordion[i].scrollHeight }px`;
  } else {
      sidebarAccordion[i].style.height = `${ sidebarAccordion[i].scrollHeight }px`;
      window.getComputedStyle(sidebarAccordion[i], null).getPropertyValue("height");
      sidebarAccordion[i].style.height = "0";
  }
  });
}

