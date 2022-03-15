const inputList = document.querySelectorAll('.testform__input');
const fieldsetList = document.querySelectorAll('fieldset');
const button = document.querySelector('.button');

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
