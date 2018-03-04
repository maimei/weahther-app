import React, { Component } from 'react';

export default class MeasurementEntry extends Component {

  //defines how to display weather measurements
  render() {
    return (
      <tr>
        <td>{this.props.newyork}</td>
        <td>{this.props.amsterdam}</td>
        <td>{this.props.helsinki}</td>
        <td>{this.props.dubai}</td>
        <td>{this.props.tokyo}</td>
      </tr>
    );
  }
}