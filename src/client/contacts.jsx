module.exports = React.createClass({
	render: function() {
		return (
			<ul>
				{this.props.contacts.map(function(contact) {
					return (
						<li>{contact}</li>
					)
				})}
			</ul>
		);
	}
});