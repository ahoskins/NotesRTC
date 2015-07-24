module.exports = function() {
	return {
		getToken: function() {
			console.dir('first');
			var deferred = Q.defer();
			chrome.identity.getAuthToken({ 'interactive': true }, function(t) {
				deferred.resolve(t);
			});
			return deferred.promise;
		},

		getContacts: function(token) {
			console.dir('second');
			var deferred = Q.defer();

			var xhr = new XMLHttpRequest();
			xhr.open('GET', 'https://www.googleapis.com/m8/feeds/contacts/default/full', true);
			xhr.setRequestHeader('Authorization', 'Bearer ' + token);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send();
			xhr.onload = function(res) {
				deferred.resolve(res);
			};

			return deferred.promise;
		}
	}
}