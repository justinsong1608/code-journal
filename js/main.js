var $img = document.querySelector('.image');
var $input = document.querySelector('#pic');

function inputImage(event) {
  $img.setAttribute('src', event.target.value);
}

$input.addEventListener('input', inputImage);
