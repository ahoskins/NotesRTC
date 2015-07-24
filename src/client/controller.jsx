var Search = require('./search.jsx');
var Google = require('./google.js');

React.render(<Search />, document.getElementById('content'));

function processContacts(raw) {
	console.dir('third');
	var response = raw.currentTarget.response;
	var parser = new DOMParser();
	var xmlDoc = parser.parseFromString(response,"text/xml");
	var children = xmlDoc.documentElement.children;
	for (var i = 0; i < children.length; i++) {
		if (children[i].nodeName !== 'entry') continue;
		var grandchildren = children[i].children;
		for (var j = 0; j < grandchildren.length; j++) {
			if (grandchildren[j].nodeName !== 'gd:email') continue;
			emails.push(grandchildren[j].attributes.getNamedItem('address').nodeValue);
		}
	}
	console.dir(emails);
}

var emails = [];
var g = Google();
g.getToken().then(g.getContacts).then(processContacts);

