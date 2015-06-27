module.exports = React.createClass({
	render: function() {
		var results = [];
		for (var i = 0; i < this.props.results.length; i++) {
			results.push(<li>{this.props.results[i].url}</li>);
		}
		return (
			<div>
				<ul>
					{results}
				</ul>
			</div>
		)
	}
});