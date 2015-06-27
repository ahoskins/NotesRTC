var Results = require('./results.jsx');

var styles = {
	search: {
		width: 300
	}
};

module.exports = React.createClass({
	getInitialState: function() {
		return {
			saved: {},
			trimmed: []
		}
	},

	componentDidMount: function() {
		var self = this;
		chrome.storage.sync.get(null, function(all) {
			var arrayified = _.map(all, function(value, key) {
				return {
					url: key,
					note: value
				}
			});
			console.dir(arrayified);
			self.setState({saved: arrayified});
		});
	},

	handleChange: function(e) {
		var fuseHandle,
			query,
			results;

		fuseHandle = new Fuse(this.state.saved, {
			keys: ['url', 'note'],
			includeScore: true
		});
		query = e.target.value;
		results = _.chain(fuseHandle.search(query))
				  .sortBy(function(result) {
				  	return result.score;
				  })
				  .pluck('item')
				  .value()
				  .slice(0,5);

		this.setState({trimmed: results});
		console.dir(results);
	},

	render: function() {
		return (
			<div>
			<form>
				<label for="search">Search:</label>
				<input style={styles.search} onChange={this.handleChange} type="email" placeholder="angular scope, closures" id="search" />
			</form>
			<Results results={this.state.trimmed} />
			</div>
		)
	}
});