var utils = require('./utils.js');

var styles = {
	box: {
		padding: 5,
		border: '1px solid black',
		borderRadius: 2
	}
};

function getBoldStyle(props) {
	var s = {};
	if (props.orientation.bold) {
		s.textWeight = 'bold';
	}
	return s;
}

function getItalicStyle(props) {
	var s = {};
	if (props.orientation.italic) {
		s.textWeight = 'bold';
	}
	return s;
}

function getPosition(props, domRef) {
	var boxEl = React.findDOMNode(domRef);
	var width = boxEl.clientWidth;
	var height = boxEl.clientHeight;

	return {
		position: 'absolute',
		top: props.orientation.posTop - height,
		left: props.orientation.posLeft - (width / 2)
	}
}

module.exports = React.createClass({
	getInitialState: function() {
		return {
			boldStyle: {},
			italicStyle: {},
			position: {
				position: 'absolute',
				top: -999,
				left: -999
			}
		}
	},

	componentWillReceiveProps: function(newProps) {
		this.setState({
			boldStyle: getBoldStyle(newProps),
			italicStyle: getItalicStyle(newProps),
			position: getPosition(newProps, this.refs.box)
		});
	},

	boldClick: function() {
		document.execCommand('bold', false);
		this.props.styleToggled();
	},

	italicClick: function() {
		document.execCommand('italic', false);
		this.props.styleToggled();
	},

	render: function() {
		return (
			<div style={utils.m(styles.box, this.state.position)} ref="box">
				<button style={this.state.boldStyle} onClick={this.boldClick}>b</button>
				<button style={this.state.italicStyle} onClick={this.italicClick}>i</button>
			</div>
		)
	}
});