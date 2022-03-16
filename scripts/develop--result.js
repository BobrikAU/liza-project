const testFormPoint = document.querySelectorAll('.testform__point'),
      inputCheckbox = document.querySelectorAll('.testform__input-checkbox'),
      inputRadio = document.querySelectorAll('.testform__input-radio'),
      textFormRadio = document.querySelectorAll('.testform__point-radio'),

      button = document.querySelector('.button'),
      iconCheckbox = document.querySelectorAll('.testform__input-pseudo-checkbox'),
      iconRadio = document.querySelectorAll('.testform__input-pseudo-radio'),

      resultSuccess = document.querySelector('#result_type_success').content,
      resultFail = document.querySelector('#result_type_fail').content,

      buttonRetryWhite = document.querySelector('#button-link__icon-retry_theme_white').content,
      buttonRetry = document.querySelector('#button-link__icon-retry').content,

      testForm = document.querySelector('.testform'),
      buttonNext = document.querySelector('.button-link-next'),

      testFormQuestionGroup = document.querySelector('.card-content');

// console.log(resultSuccess);
let flagCheckbox = false;
let flagInput = false;
let resultSucces = 0;


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

function activateButtonResult () {
  for (let i = 0; i < inputCheckbox.length; i++) {
    if ((flagCheckbox === true) && (flagInput === true)) {
      button.removeAttribute('disabled');
      addClass(button, 'button_available');
    }
  }
}

function deleteHover () {
  for (let i = 0; i < iconCheckbox.length; i++) {
    deleteClass(iconCheckbox[i], 'link-hover');
    deleteClass(iconRadio[i], 'link-hover');
  }
}

function viewResultCheckbox () {
  for (let i = 0; i < inputCheckbox.length; i++) {
    if (inputCheckbox[i].checked) {
      addClass(testFormPoint[i], 'testform__point_style_success');
      addClass(iconCheckbox[i], 'testform__result-icon_type_success-solid');
      resultSucces += 1;
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
      resultSucces += 3;
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

function selectChekbox() {
  for (let i = 0; i < inputCheckbox.length; i++) {
    inputCheckbox[i].addEventListener('change', () =>{
      togleClass(inputCheckbox[i].parentNode, 'testform__input-pseudo-checkbox_checked');
      togleClass(iconCheckbox[i], 'testform__input-checkbox_icon-checked');
      flagCheckbox = true;
      activateButtonResult();
    })
  }
}

function selectRadio() {
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
      activateButtonResult();
    })
  }
}

function addResult(procent) {
  const resultSuccessElement = resultSuccess.querySelector('.result').cloneNode(true);
  resultSuccessElement.querySelector('.result__title').textContent = `${procent}%`;
  const resultFailElement = resultFail.querySelector('.result').cloneNode(true);
  resultFailElement.querySelector('.result__title').textContent = `${procent}%`;

  if (procent >= 80) {
    return resultSuccessElement;
  } else {
    return resultFailElement;
  }
}

function addButton(procent) {
  const buttonRetryWhiteElement = buttonRetryWhite.querySelector('.button-link').cloneNode(true);
  const buttonRetryElement = buttonRetry.querySelector('.button-link').cloneNode(true);

  if (procent >= 80) {
    buttonNext.href = './course-completed.html'
    deleteClass(buttonNext, 'button-link_inactive');
    addClass(buttonNext, 'button-link_theme_orange');
    return buttonRetryWhiteElement;
  } else {
    buttonNext.href = './course-no-completed.html';
    deleteClass(buttonNext, 'button-link_inactive');
    addClass(buttonNext, 'button-link_theme_orange');
    return buttonRetryElement;
  }
}
// Тело программы ***********************************

selectChekbox();
selectRadio();

button.addEventListener('click', () => {
  viewResultCheckbox();
  viewResultRadio();
  deleteHover();

  resultSucces = (resultSucces / 6 * 100).toFixed();
  testFormQuestionGroup.append(addResult(resultSucces));
  button.style.display = 'none';
  testFormQuestionGroup.append(addButton(resultSucces))
})



// button.addEventListener('click', viewResultCheckbox);
// button.addEventListener('click', viewResultRadio);



