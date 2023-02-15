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
  $uList.prepend(renderEntry(list));
  viewSwap('entries');
  if ($noEntry.className === 'column-full no-entry') {
    toggleNoEntries();
  }
}

$journal.addEventListener('submit', save);

function renderEntry(entry) {
  var $entryList = document.createElement('li');
  $entryList.setAttribute('data-entry-id', entry.entryId);
  $entryList.setAttribute('class', 'item');

  var $divRow = document.createElement('div');
  $divRow.setAttribute('class', 'row');
  $entryList.appendChild($divRow);

  var $divCol = document.createElement('div');
  $divCol.setAttribute('class', 'column-half');
  $divRow.appendChild($divCol);

  var $imgTag = document.createElement('img');
  $imgTag.setAttribute('src', entry.photo);
  $imgTag.setAttribute('class', 'images-entry upward');
  $divCol.appendChild($imgTag);

  var $divColHalf = document.createElement('div');
  $divColHalf.setAttribute('class', 'column-half');
  $divRow.appendChild($divColHalf);

  var $hTwo = document.createElement('h2');
  $hTwo.textContent = entry.title;
  $divColHalf.appendChild($hTwo);

  var $iTag = document.createElement('i');
  $iTag.setAttribute('class', 'fa fa-pencil fa-xl');
  $iTag.setAttribute('aria-hidden', 'true');
  $divColHalf.appendChild($iTag);

  var $para = document.createElement('p');
  $para.textContent = entry.notes;
  $divColHalf.appendChild($para);

  return $entryList;
}

var $uList = document.querySelector('ul');
document.addEventListener('DOMContentLoaded', event => {
  for (var i = 0; i < data.entries.length; i++) {
    $uList.appendChild(renderEntry(data.entries[i]));
  }
  viewSwap(data.view);
  if ($uList.children.length > 0) {
    toggleNoEntries();
  }
});

var $noEntry = document.querySelector(' .no-entry');
function toggleNoEntries() {
  if ($noEntry.className === 'column-full no-entry') {
    $noEntry.className = 'column-full no-entry hidden';
  } else {
    $noEntry.className = 'column-full no-entry';
  }
}
$uList.addEventListener('click', toggleNoEntries);

var $entryForm = document.querySelector('div[data-view=entry-form]');
var $entriesView = document.querySelector('div[data-view=entries]');
function viewSwap(view) {
  if (view === 'entries') {
    $entriesView.setAttribute('class', '');
    data.view = view;
    $entryForm.setAttribute('class', 'hidden');
  } else if (view === 'entry-form') {
    $entryForm.setAttribute('class', '');
    data.view = view;
    $entriesView.setAttribute('class', 'hidden');
  }
}

var $aTag = document.querySelector('.entries-tag');
var $aButton = document.querySelector('#button-style');
$aTag.addEventListener('click', function () { viewSwap('entries'); });
$aButton.addEventListener('click', function () { viewSwap('entry-form'); });

$uList.addEventListener('click', handleClick);

var $heading = document.querySelector('.heading');
function handleClick(event) {
  if (event.target.nodeName === 'I') {
    viewSwap('entry-form');
  }

  var $closest = event.target.closest('.item');
  for (var i = 0; i < data.entries.length; i++) {
    if (data.entries[i].entryId.toString() === $closest.getAttribute('data-entry-id')) {
      data.editing = data.entries[i];
    }
  }

  $journal.elements.title.value = data.editing.title;
  $journal.elements.photo.value = data.editing.photo;
  $journal.elements.notes.value = data.editing.notes;
  $heading.textContent = 'Edit Entry';
}
