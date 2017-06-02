chrome.storage.sync.get({
  blockList: 'maffehenkie'
}, function(items) {
  var blockListStr = items.blockList;
  var blockList = blockListStr.split(',');
  var script = "";
  var i;

  $('.abo').click(function() {
    var username = $(this).parent().parent().parent().find('.username').text();
    chrome.storage.sync.set({
        blockList: items.blockList + ',' + username
    });    
    $("* > [data-member='"+username+"'").hide();
    $('a').filter(function(undex) { $(this).text() === username; }).parent().parent().html('Weggejorist en opgerot -- WAHRHEIT');
    location.reload();
  });

  for (i = 0; i < blockList.length; ++i) {
    if ($.trim(blockList[i]).length > 0) {
      script = script + "setInterval(function() { $(\"* > [data-member='"+blockList[i]+"']\").hide(); $('a').filter(function(index) { return $(this).text() === \""+blockList[i]+"\"; }).parent().parent().html('Weggejorist en opgerot -- WAHRHEIT'); }, 250);";
    }
  }

  var scriptElement = document.createElement("script");
  scriptElement.innerHTML = script;
  document.head.appendChild(scriptElement);
});
