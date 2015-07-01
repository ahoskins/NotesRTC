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
		paddingTop: 5
	}
}

module.exports = React.createClass({
	render: function() {
		var length = this.props.results.length;
		return (
			<div style={styles.outerPadding}>
				{this.props.results.map(function(result, i) {
					return (
						<div style={i === length - 1 ? {} : styles.box} key={result.url}>
							<a style={styles.url} href={result.url}>
								{result.url}
							</a>
							<br />
							<span>
								{result.note}
							</span>
						</div>
					);
				})}
			</div>
		)
	}
});