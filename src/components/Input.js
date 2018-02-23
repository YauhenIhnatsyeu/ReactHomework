import React, { Component } from 'react';

export default class Input extends Component {
	render() {
  	return (
    	<input className="app__input" type="text" value={this.props.text}>
    	</input>
    );
  }
}