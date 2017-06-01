var refresh=8;
var eventname="";

chrome.storage.sync.get({
  blockList: 'maffehenkie'
}, function(items) {
  var blockListStr = items.blockList;
  var blockList = blockListStr.split(',');
  var script = "";
  var i;

  for (i = 0; i < blockList.length; ++i) {
    script = script + "setInterval(function() { $(\"* > [data-member='"+blockList[i]+"']\").hide(); $('a').filter(function(index) { return $(this).text() === \""+blockList[i]+"\"; }).parent().parent().html('Weggejorist en opgerot -- WAHRHEIT'); }, 250);";
  }

  var scriptElement = document.createElement("script");
  scriptElement.innerHTML = script;
  document.head.appendChild(scriptElement);
});
