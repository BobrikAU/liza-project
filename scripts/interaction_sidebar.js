const sidebarAccordion = document.querySelectorAll('.sidebar__acardion'),
      sidebarArrow = document.querySelectorAll('.sidebar__arrow'),

      testFormPoint = document.querySelectorAll('.testform__point'),


function addClass (when, what) {
  when.classList.toggle(what);
}

function deleteClass (when, what) {
  when.classList.remove(what);
}

//плавное открытие сайдбара
for (let i = 0; i < sidebarArrow.length; i++) {
  if (sidebarArrow[i].classList.contains('sidebar__arrow_open')) {
    sidebarAccordion[i].style.height = `${ sidebarAccordion[i].scrollHeight }px`;
  } else {
    sidebarAccordion[i].style.height = "0px";
  };

  sidebarArrow[i].addEventListener('click', () =>{
    addClass(sidebarArrow[i], 'sidebar__arrow_open');

    if (sidebarAccordion[i].style.height === "0px") {
      console.log(sidebarAccordion[i].style.height);
      sidebarAccordion[i].style.height = `${ sidebarAccordion[i].scrollHeight }px`;
  } else {
      sidebarAccordion[i].style.height = `${ sidebarAccordion[i].scrollHeight }px`;
      window.getComputedStyle(sidebarAccordion[i], null).getPropertyValue("height");
      sidebarAccordion[i].style.height = "0";
  }
  });
}


