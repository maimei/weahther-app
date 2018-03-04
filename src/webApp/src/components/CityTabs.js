import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

export default class CityTabs extends Component {

  render() {
    return (
      
        <TabList>
          <Tab tabFor="one">New York</Tab>
          <Tab tabFor="two">Amsterdam</Tab>
          <Tab tabFor="three">Helsinki</Tab>
          <Tab tabFor="three">Dubai</Tab>
          <Tab tabFor="three">Tokyo</Tab>
        </TabList>
    );
  }
}
