import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import _ from 'lodash';
import 'react-web-tabs/dist/react-web-tabs.css';
import './App.css';
import CreateMeasurement from './CreateMeasurement';
import CityTabs from './CityTabs';

export default class Measurements extends Component {

  showData() {
    //console.log(this.props.helsinki);
    const hel = this.props.helsinki.map((temp) => <p>{temp}</p>);
    return hel;
  }

  //display time stamps of given city
  showTime(city) {
    const times = city.map((c) => <td>{c.time}</td>);
    return times;
  }

  //display temperature of given city
  showTemperature(city) {
    const times = city.map((c) => <td>{c.temperature}</td>);
    return times;
  }

  render() {
    return (
        
        <Tabs defaultTab="one" vertical>
        <CityTabs/>
        
        <TabPanel tabId="one" >
         <table>
            <tr>
              <td>Time</td>
              {this.showTime(this.props.newyork)}
            </tr>
            <tr>
              <td>Temperature (°C)</td>
              {this.showTemperature(this.props.newyork)}
              <td>
                <CreateMeasurement newyork={this.props.newyork}
                createMeasurement={this.props.createMeasurement.bind(this)}
                />
                {console.log("here")}
              </td>
            </tr>
          </table>
        </TabPanel>

        <TabPanel tabId="two">
          <p>
          <table >
            <tr>
              <td width="60%">Time</td>
              {this.showTime(this.props.amsterdam)}
            </tr>
            <tr>
              <td>Temperature (°C)</td>
              {this.showTemperature(this.props.amsterdam)}
            </tr>
          </table >
          </p>
        </TabPanel>

        <TabPanel tabId="three">
          <p>{this.showData()}</p>
        </TabPanel>
      </Tabs>

    );
  }
}
