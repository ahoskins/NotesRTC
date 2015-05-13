var Compose = React.createClass({
	getInitialState: function() {
		return {
			text: ''
		}
	},

	componentDidMount: function() {

	},

	handleSave: function() {
		console.log("ahhh it worked");
		var obj = {};
		obj['url_val'] = this.state.text;
		chrome.storage.sync.set(obj, function() {
			chrome.storage.sync.get('url_val', function(value) {
				console.log(value);
			});
		});
	},

	openPop: function() {
		chrome.windows.create({'url': 'redirect.html', 'type': 'popup'});
	},

	handleChange: function(e) {
		console.log("handle change");
		this.setState({text: e.target.value});
	},

	render: function() {
		var value = this.state.text;
		return (
			<div>
				<h1>Compose note</h1>
				<textarea value={value} onChange={this.handleChange}> </textarea>
				<button onClick={this.handleSave}>Save</button>
				<button onClick={this.openPop}>Pop</button>
			</div>
		)
	}
});

React.render(
	<Compose />,
	document.getElementById('content')
);