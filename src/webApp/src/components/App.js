import React, { Component } from 'react';
//import logo from './earth_day.png';
import logo from './earth.gif';
import './App.css';
import _ from 'lodash';
import Measurements from './Measurements';
import CreateMeasurement from './CreateMeasurement';

//all measurements for new york
const newyork = [ 
{
  time: "15:02",
  temperature: 7.4
}, 
{
  time: "13:11",
  temperature: 2.5
}
];

//all measurements for amsterdam
const amsterdam = [ 
{
  time: "15:02",
  temperature: -2.4
}, 
{
  time: "13:11",
  temperature: -2.5
}
];

const helsinki = [];

const cityNames = ['New York', 'Amsterdam', 'Helsinki', 'Dubai', 'Tokyo'];
//console.log(cityNames[0]);

//const cities = [...newyork, ...amsterdam, ...]
// TODO: put all city arrays into one array

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {amsterdam, helsinki, newyork};
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Global Weather App</h2>
        </div>

        <p className="App-content">

          <h3>All Measurements</h3>
            <div className="cities" class="boxed">
            
              <Measurements 
                helsinki={this.state.helsinki}
                newyork={this.state.newyork}
                amsterdam={this.state.amsterdam}
                createMeasurement={this.createMeasurement.bind(this)}
              />
            </div>            

          <h3>Past 24hrs</h3>
        </p>
      </div>
    );
  }

  //This method allows to add a new measurement with the given temperature
  //TODO: add for the right town (make dependant on cityIndex)
  createMeasurement(cityIndex, temperature) {
    //city=newyork
    this.state.newyork.push( {
      time: this.toFinnishTime(new Date()),
      temperature: temperature
    });
    console.log(this.state.newyork)
    this.setState( { newyork: this.state.newyork });
  }

  //Converts the given time to Finnish time (GTM+2)
  toFinnishTime(date) {
    //var date = new Date();
    date.setHours(date.getHours()+2);
    return date.toJSON().replace(/T/, ' ').replace(/\..+/, '');
  }
}
