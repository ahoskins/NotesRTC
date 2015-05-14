// This using the URL (which is globally accessable from background.js)
// Checks storage, and then renders either the composer or shows the notes for the current url
// So there will be two paths of React UI's that could happen

var compose = require('./compose.jsx')

var url = chrome.extension.getBackgroundPage().url;

chrome.storage.sync.get(url, function(val) {
	if (isEmpty(val)) {
		console.dir('not in storage');
	} else {
		console.dir('in storage');
	}
});

function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}