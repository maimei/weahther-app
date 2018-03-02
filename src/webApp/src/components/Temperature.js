import React, { Component } from 'react';

export default class TemperatureEntry extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false 
    };
  }

  //Responsible for changing the measurement entires
  renderMeasurementSection() {

    const {city, temperature} = this.props;

    if( this.state.isEditing) {
      return (
          <td>
            <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={temperature} ref="editInput"/>
            </form>
          </td>
        )
    }
  }

  //Shows the edit & delete or save & cancel buttons to allow changes
  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }

    //for delete button: onClick={this.props.deleteMeasurement.bind(this.props.measurements.temperature)}
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button>Delete</button>
      </td>
    );
  }

  render() {
    return (
      <tr>
        <td>{this.props.city}</td>
        <td>{this.props.temperature}</td>
        {this.renderActionsSection()}
        {this.renderMeasurementSection()}
      </tr>
    );
  }

  onEditClick() {
    this.setState( { isEditing: true });
  }

  onCancelClick() {
    this.setState( {isEditing: false});
  }

  onSaveClick(event) {
    event.preventDefault();

    const oldMeasurement = this.props.temperature;
    const newMeasurement = this.ref.editInput.value;
    this.props.saveMeasurement(oldMeasurement, newMeasurement);
  }
}