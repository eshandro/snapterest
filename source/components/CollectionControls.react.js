var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Button = require('./Button.react');
var CollectionRenameForm = require('./CollectionRenameForm.react');
var CollectionExportForm = require('./CollectionExportForm.react');
const CollectionActionCreators = require('../actions/CollectionActionCreators');
const CollectionStore = require('../stores/CollectionStore');


var CollectionControls = React.createClass({

	getInitialState: function() {
		return {
			// name: 'new',
			isEditingName: false 
		};
	},

	getHeaderText: function() {
		var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
		// console.log(this.props.numberOfTweetsInCollection);
		// console.log('numberOfTweetsInCollection in CollectionControls.react.js ', numberOfTweetsInCollection);
		var text = numberOfTweetsInCollection;

		var name = CollectionStore.getCollectionName();

		if (numberOfTweetsInCollection === 1) {
			text = text + ' tweet in your';
		} else {
			text = text + ' tweets in your';
		}

		return (
			// <span>{text} <strong>{this.state.name}</strong> collection</span>
			<span>{text} <strong>{name}</strong> collection</span>
		)
	},

	toggleEditCollectionName: function() {
		this.setState({
			isEditingName: !this.state.isEditingName
		});
	},

	// setCollectionName: function (name) {
	// 	this.setState({
	// 		name: name,
	// 		isEditingName: false
	// 	});
	// },
	
	removeAllTweetsFromCollection: function() {
		CollectionActionCreators.removeAllTweetsFromCollection();
	},

	render: function() {
		if (this.state.isEditingName){
			return (
				<CollectionRenameForm 
					onCancelCollectionNameChange={this.toggleEditCollectionName} />
			);
			// The following was inside return JSX before Flux refactor
			// For some reason JSX comments throwing error 
				// {/* <CollectionRenameForm name={this.state.name} */}
				// {/* 	onChangeCollectionName={this.setCollectionName} */}
				// {/* 	onCancelCollectionName={this.toggleEditCollectionName} />*/}
		}

		return (
			<div>
				<Header text={this.getHeaderText()} />
				<Button label="Rename collection" handleClick={this.toggleEditCollectionName} />
				<Button label="Empty collection" handleClick={this.removeAllTweetsFromCollection} />
				<CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
			</div>
		);
			// The following was inside return JSX before Flux refactor
			// For some reason JSX comments throwing error 

			// {/* <div>*/}
			// {/* 	<Header text={this.getHeaderText()} />*/}
			// {/* 	<Button label="Rename collection" handleClick={this.toggleEditCollectionName} />*/}
			// {/* 	<Button label="Empty collection" handleClick={this.props.onRemoveAllTweetsFromCollection} />*/}
			// {/* 	<CollectionExportForm htmlMarkup={this.props.htmlMarkup} />*/}
			// {/* </div>*/}
	}
});

module.exports = CollectionControls;