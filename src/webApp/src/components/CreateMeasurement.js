import React, { Component } from 'react';
import _ from 'lodash';

export default class CreateMeasurement extends Component {

  render() {

    //console.log(this.props.measurements);

    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" maxlength="4" size="1" placeholder="" ref="createInput" />
        <button>Add</button>
      </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();

    //test whether input is valid
    const createInput = this.refs.createInput;
    const measurement = createInput.value;

    this.props.createMeasurement(this.props.newyork, measurement);
    this.refs.createInput.value="";
  }
}