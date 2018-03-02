import React, { Component } from 'react';
import logo from './earth_day.png';
import './App.css';
import _ from 'lodash';
import Measurements from './Measurements';
import CreateMeasurement from './CreateMeasurement';


const measurements = [
{
  city: "New York",
  temperature: 7
},
{
  city: "Amsterdam",
  temperature: 2
}
];

export default class App extends Component {
  
  constructor(props) {
    super(props);
    //this.cities = Array(5).fill(["New York", "Amsterdam", "Helsinki", "Dubai", "Tokyo"]);
    this.state = {
      measurements
    };
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
            <CreateMeasurement measurements={this.state.measurements}
              CreateMeasurement={this.createMeasurement.bind(this)}
            />
            <Measurements 
              measurements={this.state.measurements}
              saveMeasurement={this.saveMeasurement.bind(this)}
              deleteMeasurement={this.deleteMeasurement.bind(this)}
              />
            </div>
          <h3>Past 24hrs</h3>
        </p>
      </div>
    );
  }

  //This method allows to add a new measurement with the given temperature
  //TODO: add for the right town (hand in town as well or button?)
  createMeasurement(temperature) {
    this.state.measurements.push( {
      city: "Unknown",
      temperature
    });
    this.setState( { measurements: this.state.measurements });
  }

  //Allows to edit the temperature measurement (not needed but nice example)
  saveMeasurement(oldMeasurement, newMeasurement) {
    const foundMeasurement = _.find(this.state.measurements, measurement => measurement.temperature === oldMeasurement)
    foundMeasurement.measurement = newMeasurement;
    this.setState( { measurements: this.state.measurements} );
  }

  deleteMeasurement(measurementToDelete) {
    _.remove(this.state.measurements, measurement => measurement.temperature === measurementToDelete);
    this.setState( { measurements: this.state.measurement });
  }
}
