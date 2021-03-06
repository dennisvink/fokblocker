function save_options() {
  var blocklist = document.getElementById('blocklist').value;
  chrome.storage.sync.set({
    blockList: blocklist
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    blockList: 'maffehenkie'
  }, function(items) {
    document.getElementById('blocklist').value = items.blockList;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
