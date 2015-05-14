(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(chrome) {
	return {
		showClient: function(width, height, left, top) {
			var opts = {
				width: width,
				height: height,
				left: left,
				top: top,
				url: chrome.runtime.getURL('build/index.html'),
				focused: true,
				type: 'popup'
			}

			chrome.windows.create(opts);
		}
	}	
}
},{}],2:[function(require,module,exports){
var windowManager = require('./window-manager')(chrome);

window.url = null;

var POP_UP_WIDTH = 600;
var PADDING_TOP = 50;
var PADDING_BOTTOM = 50;

// Listener for command to open 'Chrome notes' extension
chrome.commands.onCommand.addListener(function(command) {
	if (command === 'new-note') {
		url = window.location.href;
		chrome.windows.getCurrent(function(win) {
			var left = win.left + Math.round((win.width - POP_UP_WIDTH) / 2);
		    var top = win.top + PADDING_TOP;
		    var height = Math.max(win.height - PADDING_TOP - PADDING_BOTTOM, 600);
		    var width = POP_UP_WIDTH;

			windowManager.showClient(width, height, left, top);
		});
	}
});


},{"./window-manager":1}]},{},[2]);
