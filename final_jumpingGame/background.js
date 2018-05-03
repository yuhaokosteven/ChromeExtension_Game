console.log('bg script loaded');
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, '...');
  console.log('sending msg');

});
