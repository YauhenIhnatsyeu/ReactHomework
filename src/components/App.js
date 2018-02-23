import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import Text from './Text';
import TextArea from './TextArea';

export default class App extends Component {
	constructor(props) {
  	super(props);
    
    this.itemsList = {
    	adjectives:["high","different","small","large","young"],
    	cities:["Seoul","Shanghai","Sharm el-Sheikh","Shenzhen","Singapore"]
    };
    
    this.combinationsHistory = [];
    
    this.maxCombinations = this.sqr(this.itemsList.adjectives.length);
    
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  
  handleButtonClick() {
  	if (this.props.generated >= this.maxCombinations)
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
    this.props.handleChangeCurrentCity(
        this.capitalizeFirstLetter(this.itemsList.adjectives[randomNumber1]) +
        " " + this.itemsList.cities[randomNumber2]
    );
    this.props.handleChangeGenerated(this.combinationsHistory.length);
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
                disabled={this.props.app.generated >= this.maxCombinations}
                onClick={this.handleButtonClick} />
            <Input text={this.props.app.currentCity} />
            <Text
                generated={this.props.app.generated} 
                all={this.maxCombinations} />
            <TextArea text={this.props.app.currentCity} rows={this.props.app.generated} />
        </div>
    );
  }
}