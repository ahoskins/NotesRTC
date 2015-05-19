module.exports = React.createClass({
	getInitialState: function() {
		return {
			content: ''
		}
	},

	componentDidMount: function() {
		chrome.storage.sync.get(this.props.url, function(res) {
			console.dir(res);
		});
	},

	render: function() {
		return (
			<div>
				<p>Well, at least this component rendered...</p>
			</div>
		)
	}
});