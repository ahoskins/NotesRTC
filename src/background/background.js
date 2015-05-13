var windowManager = require('./window-manager')(chrome);

var POP_UP_WIDTH = 600;
var PADDING_TOP = 50;
var PADDING_BOTTOM = 50;

// Watch for new URI's visited
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo.url === undefined) return;
	console.log(changeInfo.url);

	// WARNING: this will continually open windows.  Don't even bother running on a browser again, it works.  
	// The principle of what it is doing is all that matters for now.
	chrome.windows.getCurrent(function(win) {
		var left = win.left + Math.round((win.width - POP_UP_WIDTH) / 2);
	    var top = win.top + PADDING_TOP;
	    var height = Math.max(win.height - PADDING_TOP - PADDING_BOTTOM, 600);
	    var width = POP_UP_WIDTH;

		windowManager.showClient(width, height, left, top);
	});

	// chrome.storage.sync.get(changeInfo.url, function(val) {
		// Deliver this to the React front-end
	// });
});

// chrome.commands.onCommand.addListener(function(command) {
// 	if (command === 'new-note') {
// 		console.log('new note requested');
// 		// Tell the React front-end to do something
// 	}
// });