

const testformPoints = document.querySelectorAll('.testform__point');

for (let i = 0; i < testformPoints.length; i++) {
  testformPoints[i].addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('testform__point_style_checked');
  });
}

