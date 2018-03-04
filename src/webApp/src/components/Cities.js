import React, { Component } from 'react';

const cities = ['New York', 'Amsterdam', 'Helsinki', 'Dubai', 'Tokyo'];
const citylist = cities.map((city) => <th>{city}</th>);

export default class Cities extends Component {

  render() {
    return (
      <thead>
        <tr>
          {citylist}
        </tr>
      </thead>
    );
  }
}