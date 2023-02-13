/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', event => {
  var steralData = JSON.stringify(data);
  localStorage.setItem('code-journal', steralData);
});

if (localStorage.getItem('code-journal')) {
  var previous = localStorage.getItem('code-journal');
  data = JSON.parse(previous);
}
