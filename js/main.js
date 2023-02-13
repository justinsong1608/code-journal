var $img = document.querySelector('.image');
var $input = document.querySelector('#pic');

function inputImage(event) {
  $img.setAttribute('src', event.target.value);
}

$input.addEventListener('input', inputImage);

var $journal = document.querySelector('form');

function save(event) {
  event.preventDefault();
  var list = {};
  list.title = $journal.elements.title.value;
  list.photo = $journal.elements.photo.value;
  list.notes = $journal.elements.notes.value;
  list.entryId = data.nextEntryId;
  data.nextEntryId += 1;
  data.entries.unshift(list);
  $img.setAttribute('src', '/images/placeholder-image-square.jpg');
  $journal.reset();
}

$journal.addEventListener('submit', save);
