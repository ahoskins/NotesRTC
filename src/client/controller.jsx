var Search = require('./search.jsx');
var Google = require('./google.js');

React.render(<Search />, document.getElementById('content'));

var g = Google();
g.getContacts();