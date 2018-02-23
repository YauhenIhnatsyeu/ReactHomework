import React, { Component } from 'react';

export default class Text extends Component {
	render() {
  	return (
    	<p>Generated {this.props.generated} of {this.props.all}</p>
    );
  }
}