const sidebarAccordion = document.querySelectorAll('.sidebar__acardion'),
      sidebarArrow = document.querySelectorAll('.sidebar__arrow');

// console.log(resultSuccess);



// Функции ***********************************

function togleClass (when, what) {
  when.classList.toggle(what);
}
function addClass (when, what) {
  when.classList.add(what);
}
function deleteClass (when, what) {
  when.classList.remove(what);
}

function openSidebar () {
  for (let i = 0; i < sidebarArrow.length; i++) {
    if (sidebarArrow[i].classList.contains('sidebar__arrow_open')) {
      sidebarAccordion[i].style.height = `${ sidebarAccordion[i].scrollHeight }px`;
    } else {
      sidebarAccordion[i].style.height = "0px";
    };

    sidebarArrow[i].addEventListener('click', () =>{
      togleClass(sidebarArrow[i], 'sidebar__arrow_open');

      if (sidebarAccordion[i].style.height === "0px") {
        sidebarAccordion[i].style.height = `${ sidebarAccordion[i].scrollHeight }px`;
    } else {
        sidebarAccordion[i].style.height = `${ sidebarAccordion[i].scrollHeight }px`;
        window.getComputedStyle(sidebarAccordion[i], null).getPropertyValue("height");
        sidebarAccordion[i].style.height = "0";
    }
    });
  }
}

openSidebar()
