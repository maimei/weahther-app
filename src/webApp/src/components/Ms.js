import React, { Component } from 'react';
import _ from 'lodash';
import Cities from './Cities';
import Measurement from './MeasurementEntry';

//Component responsible for holding and displaying all weather measurements
export default class Measurements extends Component {

  showData() {
    //const props = _.omit(this.props, 'measurements');
    //console.log(this.props.measurements);
    
    //combine all measurement lists
    const ms = [...this.props.measurements, ...this.props.amsterdam];

    console.log(ms);
 
    //return _.map(this.props.measurements, (temp, index) => <Measurement key={index} {...temp} />);#
    return _.map(ms, (temp, index) => <Measurement key={index} {...temp} />);
  }

  showAms() {
    return _.map(this.props.amsterdam, (temp, index) => <Measurement key={index} {...temp} />); 
  }

  render() {

    //console.log(this.props.measurements);

    return (
      <table>
        <Cities/>
        <tbody>
          {this.showData()}
        </tbody>
      </table>
    );
  }
}