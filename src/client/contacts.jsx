var utils = require('./utils.js');

module.exports = React.createClass({

	// hash the username you clicked on
	sendToContact: function(contact) {
		var peerHash = utils.hashCode(contact).toString();
		var conn = this.props.peer.connect(peerHash);
		conn.on('open', function() {
			console.dir('connection opened');
		});
	},

	render: function() {
		var self = this;
		return (
			<ul>
				{this.props.contacts.map(function(contact) {
					return (
						<li onClick={self.sendToContact.bind(self, contact)}>{contact}</li>
					)
				})}
			</ul>
		);
	}
});