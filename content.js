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
    script = script + "setInterval(function() { $(\"* > [data-member='"+blockList[i]+"']\").hide(); }, 1000);";
  }

  var scriptElement = document.createElement("script");
  scriptElement.innerHTML = script;
  document.head.appendChild(scriptElement);
});
