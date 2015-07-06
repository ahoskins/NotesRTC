var utils = require('./utils.js');
var Radium = require('../../node_modules/radium/dist/radium.js');

var styles = {
	box: {
		padding: 3,
		borderRadius: 8,
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: 'rgba(0,0,0,0.9)'
	},
	button: {
		padding: '0px 10px',
		borderRadius: 5,
		fontSize: '1.5em',
		lineHeight: '1.0em',
		margin: 3,
		width: '50%',
		textDecoration: 'none',
		textAlign: 'center',
		':hover': {
			color: 'white'
		}
	},
	arrowDown: {
		width: 0,
		height: 0, 
		borderLeft: '10px solid transparent',
		borderRight: '10px solid transparent',
		borderTop: '10px solid rgba(0,0,0,0.9)'
	}
};

function getBoldStyle(props) {
	var s = {};
	if (props.orientation.bold) {
		s.color = 'white';
		s.backgroundColor = 'grey';
	} else {
		s.color = 'grey';
	}
	return s;
}

function getItalicStyle(props) {
	var s = {};
	if (props.orientation.italic) {
		s.color = 'white';
		s.backgroundColor = 'grey';
	} else {
		s.color ='grey';
	}
	return s;
}

function getBoxPosition(props, domRef) {
	var boxEl = React.findDOMNode(domRef);
	var width = boxEl.clientWidth;
	var height = boxEl.clientHeight;

	return {
		position: 'absolute',
		top: props.orientation.posTop - height,
		left: props.orientation.posLeft - (width / 2)
	}
}

function getArrowPosition(props, domRef) {
	var boxEl = React.findDOMNode(domRef);
	var width = boxEl.clientWidth;
	var height = boxEl.clientHeight;

	return {
		position: 'absolute',
		top: props.orientation.posTop - 5,
		left: props.orientation.posLeft - 10
	}
}

module.exports = Radium(React.createClass({
	getInitialState: function() {
		return {
			boldStyle: {},
			italicStyle: {},
			boxPosition: {
				position: 'absolute',
				top: -999,
				left: -999
			},
			arrowPosition: {
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
			boxPosition: getBoxPosition(newProps, this.refs.box),
			arrowPosition: getArrowPosition(newProps, this.refs.box)
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
			<div>
				<div style={utils.m(styles.box, this.state.boxPosition)} ref="box">
					<a href="#" style={utils.m(styles.button, this.state.boldStyle)} onClick={this.boldClick} key="bold">b</a>
					<a href="#" style={utils.m(styles.button, this.state.italicStyle)} onClick={this.italicClick} key="italic">i</a>
				</div>
				<div style={utils.m(styles.arrowDown, this.state.arrowPosition)}></div>
			</div>
		)
	}
}));
