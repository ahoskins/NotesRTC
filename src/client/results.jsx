var Contacts = require('./contacts.jsx');

var styles = {
	url: {
		fontWeight: 'bold'
	},
	box: {
		borderBottom: 1,
		borderBottomStyle: 'solid',
		borderBottomColor: 'black'
	},
	outerPadding: {
		paddingTop: 5,
		width: '100%'
	},
	shareWithButton: {
		float: 'right'
	},
	halfLeft: {
		width: '50%',
		float: 'left',
		overflow: 'hidden'
	},
	halfRight: {
		width: '50%',
		float: 'right',
		overflow: 'hidden',
		paddingLeft: 5
	},
	full: {
		width: '100%',
	}
}

module.exports = React.createClass({

	getInitialState: function() {
		return {
			shareShown: false
		}
	},

	open: function(url) {
		chrome.tabs.create({windowId: this.props.activeWindow, url: url});
	},

	showContacts: function() {
		this.setState({shareShown: ! this.state.shareShown});
	},

	render: function() {
		var self = this;
		var length = this.props.results.length;
		var body = null;
		if (this.state.shareShown) {
			body =  <div style={styles.halfRight}>
						<Contacts contacts={this.props.contacts} peer={this.props.peer}/>
					</div>
		}
		return (
			<div style={styles.outerPadding}>
				<div style={this.state.shareShown ? styles.halfLeft : styles.full}>
					{this.props.results.map(function(result, i) {
						return (
							<div style={i === length - 1 ? {} : styles.box} key={result.url}>
								<div>
									<a style={styles.url} href="" onClick={self.open.bind(null, result.url)}>
										{result.url}
									</a>
									<a style={styles.shareWithButton} onClick={self.showContacts.bind(null)}>Share With</a>
								</div>
								<span dangerouslySetInnerHTML={{'__html': result.note}} />
							</div>
						);
					})}
				</div>
				{body}
			</div>
		)
	}
});