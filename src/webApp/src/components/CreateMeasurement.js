import React, { Component } from 'react';
import _ from 'lodash';

export default class CreateMeasurement extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  renderError() {
    if (!this.state.error) {return null;}

    return <div style={{ color: 'red'}}>{this.state.error}</div>;
  }

  render() {

    //console.log(this.props.measurements);

    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Add your measurement" refs="createInput" />
        <button>Add</button>
        {this.renderError()}
      </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();

    //test whether input is valid
    const createInput = this.refs.createInput;
    const measurement = createInput.value;
    const validateInput = this.validateInput(measurement);

    if(validateInput) {
      this.setState({error: validateInput});
      return;
    }

    this.setState({error: null});
    this.props.CreateMeasurement(measurement);
    this.refs.createInput.value="";
  }

  validateInput(temperature) {
    if (!temperature) {
      return 'Please enter a measurement.';
    } else if (_.find(this.props.measurements, measurement => measurement.temperature === temperature)) {
      return 'temperature already existing' //this is not needed, replace with a check for float
    } else {
      return null;
    }
  }
}