const sidebarAccordion = document.querySelectorAll('.sidebar__acardion'),
      sidebarArrow = document.querySelectorAll('.sidebar__arrow'),

      testFormPoint = document.querySelectorAll('.testform__point'),
      inputCheckbox = document.querySelectorAll('.testform__input-checkbox'),
      inputRadio = document.querySelectorAll('.testform__input-radio'),
      testFormRadio = document.querySelectorAll('.testform__point-radio')

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

// окрашевает текст при выборе чекбокса
inputCheckbox.forEach((item) =>{
  item.addEventListener('change', () =>{
    addClass(item.parentNode, 'testform__input-pseudo-checkbox_checked')
  })
})

// окрашевает текст при выборе радио кнопки. 2 цикла, первый прогоняет по всем радиокнпокам
// определяем какую радио кнопку выбрали
for (let i = 0; i < inputRadio.length; i++) {
  inputRadio[i].addEventListener('change', () =>{
// второй цикл прогоняет еще раз по кнопка и удаляет окрас текста на тех с котороых убрали радиокнопку
    for (let j = 0; j < inputRadio.length; j++) {
      if (inputRadio[j].checked) {
        addClass(testFormRadio[j], 'testform__input-pseudo-checkbox_checked');
      } else {
        deleteClass(testFormRadio[j], 'testform__input-pseudo-checkbox_checked')
      }
    }
  })

}
