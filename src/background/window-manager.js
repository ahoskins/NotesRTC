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