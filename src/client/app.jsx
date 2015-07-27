var Search = require('./search.jsx');
var g = require('./google.js')();
var utils = require('./utils.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			contacts: [],
			peer: null
		}
	},

	componentDidMount: function() {
		g.getToken().then(g.getContacts).then(this.processContacts);
		g.getEmail().then(this.processEmail);
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
		this.setState({contacts: emails});
	},

	processEmail: function(email) {
		var hashCode = utils.hashCode(email).toString();
		var p = new Peer(hashCode, {host: 'chrome-notes-server.herokuapp.com', port: 80});
		this.setState({peer: p});
	},

 	render: function() {
		return (
			<Search contacts={this.state.contacts} peer={this.state.peer}/>
		)
	}
});