var Search = require('./search.jsx');
var Compose = require('./compose.jsx');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<Search />
				<Compose />
			</div>
		)
	}
});