var styles = {
	search: {
		width: 300
	}
};

module.exports = React.createClass({
	render: function() {
		return (
			<form>
				<label for="search">Search:</label>
				<input style={styles.search} type="email" placeholder="angular scope, closures" id="search" />
			</form>
		)
	}
});