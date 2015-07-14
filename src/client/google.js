module.exports = function() {
	return {
		getContacts: function() {
			chrome.identity.getAuthToken({ 'interactive': true }, function(t) {
				var xhr = new XMLHttpRequest();
				xhr.open('GET', 'https://www.googleapis.com/m8/feeds/contacts/default/full', true);
				xhr.setRequestHeader('Authorization', 'Bearer ' + t);
			  	xhr.setRequestHeader('Content-Type', 'application/json');
			  	xhr.onload = function(e) {
			  		console.dir(e);
			  		var s =  e.currentTarget.response;
			  		var parser = new DOMParser();
    				var xmlDoc = parser.parseFromString(s,"text/xml");
    				console.dir(xmlDoc);
    				var emails = [];
    				console.dir(Array.prototype.slice.call(xmlDoc.documentElement.children));
    				console.log(Array.prototype.slice.call(xmlDoc.documentElement.children)[15].nodeName);
    				var c1 = xmlDoc.documentElement.children;
    				for (var i = 0; i < c1.length; i++) {
    					if (c1[i].nodeName !== 'entry') continue;
    					for (var j = 0; j < c1[i].children.length; j++) {
    						if (c1[i].children[j].nodeName !== 'gd:email') continue;
    						emails.push(c1[i].children[j].attributes.getNamedItem('address').nodeValue);
    					}
    				}
    				console.log('hi');
    				console.dir(emails);
			  	};
			  	xhr.send();
			});
		}
	}
};