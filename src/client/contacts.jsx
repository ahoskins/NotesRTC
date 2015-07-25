module.exports = React.createClass({

	sendToContact: function() {
		var peer = new Peer('1', {host: 'chrome-notes-server.herokuapp.com', port: 80});
		var peerTwo;
		peer.on('open', function(id) {
			console.dir(id);
			var conn = peer.connect('2');
			conn.on('open', function() {
				console.dir('connection opened');
			});
			setTimeout(function() {
				var peerTwo = new Peer('2', {host: 'chrome-notes-server.herokuapp.com', port: 80});
				peerTwo.on('open', function(id) {
					console.dir(id);
				});
			}, 10 * 1000);

		});
	},

	render: function() {
		var self = this;
		return (
			<ul>
				{this.props.contacts.map(function(contact) {
					return (
						<li onClick={self.sendToContact}>{contact}</li>
					)
				})}
			</ul>
		);
	}
});