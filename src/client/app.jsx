var Search = require('./search.jsx');
var g = require('./google.js')();

module.exports = React.createClass({
	getInitialState: function() {
		return {
			contacts: []
		}
	},

	componentDidMount: function() {
		g.getToken().then(g.getContacts).then(this.processContacts);
	},

	processContacts: function(raw) {
		var response = raw.currentTarget.response;
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(response,"text/xml");
		var children = xmlDoc.documentElement.children;
		var emails = [];
		for (var i = 0; i < children.length; i++) {
			if (children[i].nodeName !== 'entry') continue;
			var grandchildren = children[i].children;
			for (var j = 0; j < grandchildren.length; j++) {
				if (grandchildren[j].nodeName !== 'gd:email') continue;
				emails.push(grandchildren[j].attributes.getNamedItem('address').nodeValue);
			}
		}
		this.setState({contacts: emails}, function() {
			console.dir(this.state.contacts);
		});
	},

 	render: function() {
		return (
			<Search />
		)
	}
});