var Results = require('./results.jsx');
var Compose = require('./compose.jsx');

var styles = {
	search: {
		width: 300
	}
};

module.exports = React.createClass({
	getInitialState: function() {
		return {
			saved: {},
			trimmed: [],
			query: ''
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
			results;

		fuseHandle = new Fuse(this.state.saved, {
			keys: ['url', 'note'],
			includeScore: true
		});

		results = _.chain(fuseHandle.search(e.target.value))
				  .sortBy(function(result) {
				  	return result.score;
				  })
				  .pluck('item')
				  .value()
				  .slice(0,5);

		this.setState({trimmed: results, query: e.target.value});
		console.dir(results);
	},

	render: function() {
		var body;
		if (this.state.query === '') {
			body = <Compose />;
		} else {
			body = <Results results={this.state.trimmed} />;
		}
		return (
			<div>
			<form>
				<label for="search">Search:</label>
				<input style={styles.search} onChange={this.handleChange} type="email" placeholder="angular scope, closures" id="search" />
			</form>
			{body}
			</div>
		)
	}
});