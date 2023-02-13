/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', event => {
  var steralData = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', steralData);
});
