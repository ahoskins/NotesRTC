// This using the URL (which is globally accessable from background.js)
// Checks storage, and then renders either the composer or shows the notes for the current url
// So there will be two paths of React UI's that could happen

var Compose = require('./compose.jsx');
var Viewer = require('./viewer.jsx');

var url = chrome.extension.getBackgroundPage().url;

chrome.storage.sync.get(url, function(val) {
	if (isEmpty(val)) {
		console.dir('not in storage');
		React.render(
			<Compose />,
			document.getElementById('content')
		)
	} else {
		console.dir('in storage');
		React.render(
			<Viewer url={url} />,
			document.getElementById('content')
		)
	}
});

function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}