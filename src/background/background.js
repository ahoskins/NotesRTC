// Watch for new URI's visited
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo.url === undefined) return;
	console.log(changeInfo.url);
	chrome.storage.sync.get(changeInfo.url, function(val) {
		// Deliver this to the React front-end
	});
});

// chrome.commands.onCommand.addListener(function(command) {
// 	if (command === 'new-note') {
// 		console.log('new note requested');
// 		// Tell the React front-end to do something
// 	}
// });