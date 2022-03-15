const sidebarAccordion = document.querySelectorAll('.sidebar__acardion'),
      sidebarArrow = document.querySelectorAll('.sidebar__arrow'),

      testFormPoint = document.querySelectorAll('.testform__point'),
      inputCheckbox = document.querySelectorAll('.testform__input-checkbox'),
      inputRadio = document.querySelectorAll('.testform__input-radio'),
      textFormRadio = document.querySelectorAll('.testform__point-radio'),

      button = document.querySelector('.button'),
      iconCheckbox = document.querySelectorAll('.testform__input-pseudo-checkbox'),
      iconRadio = document.querySelectorAll('.testform__input-pseudo-radio');


let flagCheckbox = false;
let flagInput = false;


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

function activeButtonResult () {
  for (let i = 0; i < inputCheckbox.length; i++) {
    if ((flagCheckbox === true) && (flagInput === true)) {
      button.removeAttribute('disabled');
      addClass(button, 'button_available');
    }
  }
}



// Тело программы ***********************************


//плавное открытие сайдбара
for (let i = 0; i < sidebarArrow.length; i++) {
  if (sidebarArrow[i].classList.contains('sidebar__arrow_open')) {
    sidebarAccordion[i].style.height = `${ sidebarAccordion[i].scrollHeight }px`;
  } else {
    sidebarAccordion[i].style.height = "0px";
  };

  sidebarArrow[i].addEventListener('click', () =>{
    togleClass(sidebarArrow[i], 'sidebar__arrow_open');

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
for (let i = 0; i < inputCheckbox.length; i++) {
  inputCheckbox[i].addEventListener('change', () =>{
    togleClass(inputCheckbox[i].parentNode, 'testform__input-pseudo-checkbox_checked');
    togleClass(iconCheckbox[i], 'testform__input-checkbox_icon-checked');
    flagCheckbox = true;
    activeButtonResult();
  })
}

// окрашевает текст при выборе радио кнопки. 2 цикла, первый прогоняет по всем радиокнпокам
// определяем какую радио кнопку выбрали
for (let i = 0; i < inputRadio.length; i++) {
  inputRadio[i].addEventListener('change', () =>{

    flagInput = true;
// второй цикл прогоняет еще раз по кнопка и удаляет окрас текста на тех с котороых убрали радиокнопку
    for (let j = 0; j < inputRadio.length; j++) {
      if (inputRadio[j].checked) {
        togleClass(textFormRadio[j], 'testform__input-pseudo-checkbox_checked');
        togleClass(iconRadio[j], 'testform__input-radio_icon-checked');
      } else {
        deleteClass(textFormRadio[j], 'testform__input-pseudo-checkbox_checked');
        deleteClass(iconRadio[j], 'testform__input-radio_icon-checked');
      }
    }
    activeButtonResult();

  })
}
button.addEventListener('click', () => {
  viewResultCheckbox();
  console.log(k);
})
button.addEventListener('click', () => {
  viewResultRadio();
  k = k / 6 * 100
  console.log(k);
})
// button.addEventListener('click', viewResultCheckbox);
// button.addEventListener('click', viewResultRadio);
let k = 0;
function viewResultCheckbox () {
  for (let i = 0; i < inputCheckbox.length; i++) {
    if (inputCheckbox[i].checked) {
      addClass(testFormPoint[i], 'testform__point_style_success');
      addClass(iconCheckbox[i], 'testform__result-icon_type_success-solid');
      k += 1;
      iconCheckbox[i].checked = false;
    } else {
      addClass(iconCheckbox[i], 'testform__result-icon_type_success-default');
    }
  }
}


function viewResultRadio () {
  for (let i = 0; i < inputRadio.length; i++) {
    if ((inputRadio[i].checked) && (i === 1)) {
      addClass(textFormRadio[i], 'testform__point_style_success');
      addClass(iconRadio[i], 'testform__result-icon_type_success-solid');
      k += 1;
    } else if ((inputRadio[i].checked) && (i !== 1)) {
      addClass(textFormRadio[i], 'testform__point_style_fail');
      addClass(iconRadio[1], 'testform__result-icon_type_success-default');
      addClass(iconRadio[i], 'testform__result-icon_type_fail-solid');
    }
    else {
      addClass(iconRadio[i], 'testform__result-icon_type_fail-default');
    }
  }
}

