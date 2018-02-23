import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
//import reducer from './reducers';
import logo from './logo.svg';
import './App.css';

/* Eugene Ignatsyev, greatdoubletbpot@gmail.com */

const initialState = [];

function reducer(state = initialState, action){

}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducer, initialState, enhancers);

class Button extends React.Component {
	render() {
  	return (
    	<button onClick={this.props.onClick} disabled={this.props.disabled}>
        Generate
      </button>
    );
  }
}

class Input extends React.Component {
	render() {
  	return (
    	<input className="app__input" type="text" value={this.props.text}>
    	</input>
    );
  }
}

class TextArea extends React.Component {
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

class Text extends React.Component {
	render() {
  	return (
    	<p>Generated {this.props.generated} of {this.props.all}</p>
    );
  }
}

class App extends React.Component {
	constructor(props) {
  	super(props);
    
    this.state = {
    	currentItem: "",
      generated: 0
    }
    
    this.itemsList = {
    	adjectives:["high","different","small","large","young"],
    	cities:["Seoul","Shanghai","Sharm el-Sheikh","Shenzhen","Singapore"]
    };
    
    this.combinationsHistory = [];
    
    this.maxCombinations = this.sqr(this.itemsList.adjectives.length);
    
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  
  handleButtonClick() {
  	if (this.state.generated >= this.maxCombinations)
    	return;
  
  	let randomNumber1;
    let randomNumber2;
  
  	do {
      randomNumber1 = this.getRandomNumber(
        0, this.itemsList.adjectives.length);
      randomNumber2 = this.getRandomNumber(
        0, this.itemsList.adjectives.length);
    } while (this.indexOfIn2dArray(this.combinationsHistory, [randomNumber1, randomNumber2]) !== -1)
    
    this.combinationsHistory.push([randomNumber1, randomNumber2]);
    this.setState({
      currentItem: 
        this.capitalizeFirstLetter(
          this.itemsList.adjectives[randomNumber1])
        + " " + this.itemsList.cities[randomNumber2],
			generated: this.combinationsHistory.length
    });
  }
  
  getRandomNumber(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
  }
  
  capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
	}
  
  indexOfIn2dArray(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] === item[0] && array[i][1] === item[1]) {
      	return i;
      }
    }
    return -1;
	}
  
  sqr(x) {
  	return x * x;
  }

	render() {
  	return (
    	<div className="app">
    	  <Button 
          disabled={this.state.generated >= this.maxCombinations}
          onClick={this.handleButtonClick} />
        <Input text={this.state.currentItem} />
        <Text
          generated={this.state.generated} 
          all={this.maxCombinations} />
        <TextArea text={this.state.currentItem} rows={this.state.generated} />
    	</div>
    );
  }
}

ReactDOM.render(
	<App />,
  document.getElementById("root")
);

export default App;
