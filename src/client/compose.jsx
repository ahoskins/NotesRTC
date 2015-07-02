var TextOptions = require('./text-options.jsx');

var styles = {
	composeArea: {
		padding: '0% 20%'
	},
	labelPadding: {
		padding: '5px 0px'
	}
}

function getParentNodes(element) {
	var nodeNames = {};
	while (element.parentNode) {
		nodeNames[element.nodeName] = true;
		element = element.parentNode;
	}
	return nodeNames;
}

function hasNode(nodeList, name) {
	return nodeList[name];
}

module.exports = React.createClass({
	getInitialState: function() {
		return {
			text: '',
			url: chrome.extension.getBackgroundPage().url,
			textOptions: {bold: false, italic: false, posLeft: -999, posTop: -999}
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
				// self.setState({text: val[self.state.url]});
				var articleEl = React.findDOMNode(self.refs.content);
				articleEl.innerHTML = val[self.state.url];
			}
		});

		this.setupEventBindings();
	},

	setupEventBindings: function() {
		document.onmouseup = this.checkTextHighlighting;
		document.onkeyup = this.saveContent;
	},

	checkTextHighlighting: function(e) {
		console.log('text highlighted');
		var selection = window.getSelection();
		if (selection.isCollapsed) {
			this.setState({textOptions: {
				bold: false,
				italic: false,
				posLeft: -999,
				posTop: -999
			}});
		} else {
			nodeList = getParentNodes(selection.focusNode);
			if (hasNode(nodeList, 'ARTICLE')) {
				// Update state which is passed as props to text-options component
				var b = selection.getRangeAt(0).getBoundingClientRect();
				this.setState({textOptions: {
					bold: hasNode(nodeList, 'B'),
					italic: hasNode(nodeList, 'I'),
					posLeft: (b.left + b.right) / 2,
					posTop: b.top - 5 + window.pageYOffset
				}});
			}
		}
	},

	saveContent: function() {
		var articleEl = React.findDOMNode(this.refs.content);
		if (articleEl === null) return;

		var obj = {};
		var key = this.state.url;
		obj[key] = articleEl.innerHTML;
		chrome.storage.sync.set(obj);
	},

	componentWillUnmount: function() {
		document.onmouseup = null;
		document.onkeyup = null;
	},

	render: function() {
		return (
			<div style={styles.composeArea}>
				<div style={styles.labelPadding}>Current Notes:</div>
				<article contentEditable="true" ref="content">
					<span>start here...</span>
				</article>
				<TextOptions orientation={this.state.textOptions} styleToggled={this.saveContent} />
			</div>
		)
	}
});