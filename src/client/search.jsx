var Results = require('./results.jsx');
var Compose = require('./compose.jsx');

var styles = {
	search: {
		width: 300
	},
	spacer: {
		position: 'absolute',
		left: 0,
		width: '100%'
	},
	topSpacer: {
		backgroundColor: '#64B5F6',
		top: 0,
		height: '0.7em'
	},
	middleSpace: {
		backgroundColor: '#455A64',
		height: '0.2em'
	},
	labelPadding: {
		padding: '5px 0px'
	},
	clearButton: {
		marginLeft: 5,
		paddingLeft: 5,
		paddingRight: 5,
	}
};

function m() {
	var result = {};
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i]) {
			for (k in arguments[i]) {
				result[k] = arguments[i][k];
			}
		}
	}
	console.dir(result);
	return result;
}

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

	handleClear: function() {
		this.setState({query: '', trimmed: []});
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
				<div style={m(styles.topSpacer, styles.spacer)} />
				<div style={styles.labelPadding}>Search:</div>
				<input style={styles.search} onChange={this.handleChange} value={this.state.query} type="email" placeholder="angular scope, closures" />
				<button style={styles.clearButton} onClick={this.handleClear}>clear</button>
				<div style={m(styles.middleSpace, styles.spacer)} />
				{body}
			</div>
		)
	}
});