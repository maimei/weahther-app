import React, { Component } from 'react';
//import logo from './earth_day.png';
import logo from './earth.gif';
import './App.css';
import _ from 'lodash';
import Measurements from './Measurements';
import CreateMeasurement from './CreateMeasurement';
//import Test from './Test';

//const measurements = [ {temperature: 7.4}, {temperature: 2.5}];

//all measurements for new york
const helsinki = [7.4, 5.3, 3.7, 3.8, 7.5];
const measurements = [{helsinki: -7.4}, {helsinki: 5.3}, {newyork: 3.7}];

//all measurements for helsinki
//const amsterdam = [{newyork: -8.2}, {newyork:-5.1}, {newyork:-9.7}, {newyork:-4.1}];

//this.toFinnishTime(new Date()),

const newyork = [ 
{
  time: "15:02",
  temperature: 7.4
}, 
{
  time: "13:11",
  temperature: 2.5
},
{
  time: "11:46",
  temperature: 1.5
}
];

const amsterdam = [ 
{
  time: "15:02",
  temperature: -2.4
}, 
{
  time: "13:11",
  temperature: -2.5
},
{
  time: "11:46",
  temperature: -3.8
}
];

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {measurements, amsterdam, helsinki, newyork};
  }

//
// <Measurements 
//  measurements={this.state.measurements}
// />

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
              
              />
            </div>            

          <h3>Past 24hrs</h3>
        </p>
      </div>
    );
  }
}
