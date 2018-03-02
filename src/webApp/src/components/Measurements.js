import React, { Component } from 'react';
import _ from 'lodash';
import Cities from './Cities';
import TemperatureEntry from './Temperature';

export default class Measurements extends Component {

  showData() {
    const props = _.omit(this.props, 'measurements');

    return _.map(this.props.measurements, (temp, index) => <TemperatureEntry key={index} {...temp} />);
    //return _.map(this.props.measurements (temp, index), <TemperatureEntry key={index} {...temp}/>);
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