import React, { Component } from 'react';

export default class TextArea extends Component {
	constructor(props) {
  	super(props);
    
    this.text = "";
    
    this.getText = this.getText.bind(this);
  }

	getText() {
  	//(this.text === "" ? "" : "\n") if current text is empty, new line is added without "\n"
  	this.text = (this.props.text + (this.text === "" ? "" : "\n")) + this.text;
    return this.text;
  }

	render() {
  	return (
    	<textarea 
        className="app__textarea"
        value={this.getText()}
        rows={this.props.rows}>
      </textarea>
    );
  }
}