

/*делает стрелку на белой кнопке "назад" темнее при наведении*/
const arrowBackOrange = document.querySelector('.button-link__icon-arrow');

function changeArrowBackOrangeDarker (evt) {
  arrowBackOrange.src = './images/icon-arrow-back-orange-hover.svg';
}
arrowBackOrange.closest('.button-link').addEventListener('mouseenter', changeArrowBackOrangeDarker);

function changeArrowBackOrangeLighter (evt) {
  arrowBackOrange.src = './images/icon-arrow-back-orange-default.svg';
}
arrowBackOrange.closest('.button-link').addEventListener('mouseleave', changeArrowBackOrangeLighter);








/*делает стрелки на белой кнопке "пересдать" темнее*/
const ratryOrange = document.querySelector('.button-link__icon-retry_theme_white');

function changeRatryOrangeDarker (evt) {
  ratryOrange.src = './images/icon-retry-orange-hover.svg';
}
ratryOrange.closest('.button-link').addEventListener('mouseenter', changeRatryOrangeDarker);

function changeRatryOrangeLighter (evt) {
  ratryOrange.src = './images/icon-retry-orange-default.svg';
}
ratryOrange.closest('.button-link').addEventListener('mouseleave', changeRatryOrangeLighter);


