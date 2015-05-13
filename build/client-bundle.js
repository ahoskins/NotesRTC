(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Compose = React.createClass({displayName: "Compose",
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
			React.createElement("div", null, 
				React.createElement("h1", null, "Compose note"), 
				React.createElement("textarea", {value: value, onChange: this.handleChange}, " "), 
				React.createElement("button", {onClick: this.handleSave}, "Save"), 
				React.createElement("button", {onClick: this.openPop}, "Pop")
			)
		)
	}
});

React.render(
	React.createElement(Compose, null),
	document.getElementById('content')
);

},{}]},{},[1]);
