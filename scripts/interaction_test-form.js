const inputList = document.querySelectorAll('.testform__input');
const fieldsetList = document.querySelectorAll('fieldset');
const button = document.querySelector('.button');
const testform = document.forms[0];

function checkResult() {
  let result = 0

  for (let i = 0; i < fieldsetList.length; i++) {
    for (let j = 0; j < fieldsetList[i].children.length; j++) {
      if (fieldsetList[i].children[j].children[0]) {
        if (fieldsetList[i].children[j].children[0].checked) {
          result++
          break
        };
      }
    }
  }

  if (result === fieldsetList.length) {
    button.disabled = false
    button.classList.add('button_available')
  } else {
    button.disabled = true
    button.classList.remove('button_available')
  }
}

function colorPoint(evt) {
  const target = evt.target
  target.parentElement.classList.toggle('testform__point_style_checked')
  inputList.forEach(function (item) {
    if (!item.checked) {
      item.parentElement.classList.remove('testform__point_style_checked')
    }
  })
  checkResult();
}

inputList.forEach(function (item) {
  item.addEventListener('click', colorPoint);
});

const testCard = document.querySelector('.card-content_type_test')
const buttonTerms = document.querySelector('.card-content_type_test .button-link')
const terms = document.querySelector('.card-content_type_terms');
const buttonTest = document.querySelector('.card-content_type_terms .button-link')

//показать-скрыть условия теста
function showTerms() {
  testCard.classList.toggle('card-content_hidden');
  terms.classList.toggle('card-content_hidden');
}

function returnTest() {
  testCard.classList.toggle('card-content_hidden');
  terms.classList.toggle('card-content_hidden');
}

buttonTerms.addEventListener('click', showTerms);
buttonTest.addEventListener('click', returnTest);

testform.addEventListener('submit', showTestResult);

const testResult = testCard.querySelector('.result_type_success');

const retryButton = testCard.querySelectorAll('.button-link')[1];

const forwardButton = document.querySelectorAll('.course-nav .button-link')[1];

const labels = testCard.querySelectorAll('.testform__point');
const pseudoCheckboxes = testCard.querySelectorAll('.testform__input-pseudo-checkbox');
const pseudoRadios = testCard.querySelectorAll('.testform__input-pseudo-radio');

function showTestResult(evt) {
  evt.preventDefault();
  testResult.classList.add('result_shown')
  button.remove()
  retryButton.classList.toggle('card-content__button-link_hidden');
  forwardButton.href = './course-completed.html'
  forwardButton.classList.remove('button-link_inactive');
  forwardButton.classList.add('button-link_theme_orange')
  forwardButton.children[0].classList.remove('button-link__icon-arrow_theme_gray');
  forwardButton.children[0].classList.add('button-link__icon-arrow_theme_orange')
  fieldsetList.forEach(function (item) {item.disabled = true})

  labels.forEach(function (item) {
    if (item.className === 'testform__point testform__point_style_checked') {
      item.classList.remove('testform__point_style_checked')
  }})

  pseudoCheckboxes.forEach(function (item) {
    item.classList.add('testform__result-icon');
    item.classList.remove('link-hover');
    item.previousElementSibling.checked = false;
  })

  pseudoRadios.forEach(function (item) {
    item.classList.add('testform__result-icon');
    item.classList.remove('link-hover');
    item.previousElementSibling.checked = false;
  })

  pseudoCheckboxes[0].classList.add('testform__result-icon_type_success-solid')
  pseudoCheckboxes[2].classList.add('testform__result-icon_type_success-solid')
  pseudoCheckboxes[1].classList.add('testform__result-icon_type_success-default')

  pseudoRadios[0].classList.add('testform__result-icon_type_fail-default')
  pseudoRadios[1].classList.add('testform__result-icon_type_success-solid')
  pseudoRadios[2].classList.add('testform__result-icon_type_fail-default')

  labels[0].classList.add('testform__point_style_success')
  labels[2].classList.add('testform__point_style_success')
  labels[4].classList.add('testform__point_style_success')
}
