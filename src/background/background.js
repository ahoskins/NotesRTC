var windowManager = require('./window-manager')(chrome);

window.url = null;

var POP_UP_WIDTH = 600;
var PADDING_TOP = 50;
var PADDING_BOTTOM = 50;

// Listener for command to open 'Chrome notes' extension
chrome.commands.onCommand.addListener(function(command) {
	if (command === 'new-note') {
		url = window.location.href;
		chrome.windows.getCurrent(function(win) {
			var left = win.left + Math.round((win.width - POP_UP_WIDTH) / 2);
		    var top = win.top + PADDING_TOP;
		    var height = Math.max(win.height - PADDING_TOP - PADDING_BOTTOM, 600);
		    var width = POP_UP_WIDTH;

			windowManager.showClient(width, height, left, top);
		});
	}
});

