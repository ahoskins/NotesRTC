var styles = {
	compose: {
		width: 300
	},
	labelPadding: {
		padding: '5px 0px'
	}
}

module.exports = React.createClass({
	getInitialState: function() {
		return {
			text: '',
			url: chrome.extension.getBackgroundPage().url
		}
	},

	/*
	Check if the currently active URL in the main chrome window has notes in storage
	*/
	componentDidMount: function() {
		var self = this;
		chrome.storage.sync.get(this.state.url, function(val) {
			if (Object.keys(val).length === 0) {
				// not in storage --> show blank textarea
				console.dir('not in storage');
			} else {
				// in storage --> show saved note
				console.dir('in storage!');
				console.dir(val);
				self.setState({text: val[self.state.url]});
			}
		});
	},

	/*
	Save the new textarea value to state variable and update in chrome.storage.sync
	*/
	handleChange: function(e) {
		var self = this;
		this.setState({text: e.target.value}, function() {
			var obj = {};
			var key = self.state.url;
			obj[key] = self.state.text;
			chrome.storage.sync.set(obj);
		});
	},

	render: function() {
		var value = this.state.text;
		return (
			<div>
				<div style={styles.labelPadding}>Current Notes:</div>
				<textarea style={styles.compose} value={value} onChange={this.handleChange} />
			</div>
		)
	}
});