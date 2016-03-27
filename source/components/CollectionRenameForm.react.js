var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Button = require('./Button.react');
const CollectionActionCreators = require('../actions/CollectionActionCreators');
const CollectionStore = require('../stores/CollectionStore');

var inputStyle = {
	marginRight: '5px'
};

var CollectionRenameForm = React.createClass({

	getInitialState: function() {
		return {
			// inputValue: this.props.name
			inputValue: CollectionStore.getCollectionName()
		};
	},

	setInputValue: function(inputValue) {
		this.setState({
			inputValue: inputValue 
		});
	},

	handleInputValueChange: function(e) {
		var inputValue = e.target.value;
		this.setInputValue(inputValue);
	},

	handleFormSubmit: function(e) {
		e.preventDefault();

		var collectionName = this.state.inputValue;
		// this.props.onChangeCollectionName(collectionName);
		CollectionActionCreators.setCollectionName(collectionName);
		this.props.onCancelCollectionNameChange();
	},

	handleFormCancel: function(e) {
		e.preventDefault();

		// var collectionName = this.props.name;
		var collectionName = CollectionStore.getCollectionName();
		this.setInputValue(collectionName);
		this.props.onCancelCollectionNameChange();
	},

	componentDidMount: function() {
		this.refs.collectionName.focus();
	},

	render: function () {
		return (
			<form className="form-inline" onSubmit={this.handleSubmit}>
				<Header text="Collection name:" />
				<div className="form-group">
					<input 
						className="form-control" 
						style={inputStyle} 
						onChange={this.handleInputValueChange} 
						value={this.state.inputValue} 
						ref="collectionName" />
				</div>
				<Button label="Change" handleClick={this.handleFormSubmit} />
				<Button label="Cancel" handleClick={this.handleFormCancel} />
			</form>
		);
	}

});

module.exports = CollectionRenameForm;