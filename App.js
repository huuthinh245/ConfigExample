import React, { Component } from 'react';
import { NetInfo } from 'react-native';
import Root from '@/Route/Root';
import networkStore from '@/Appstore/HomeStore';
import dataStore from '@/Appstore/DataStore';

export default class App extends Component {
  componentDidMount() {
    NetInfo.isConnected.fetch().then((isConnected) => {
      networkStore.listenNetwork(isConnected);
    });
    NetInfo.addEventListener('connectionChange', this.handleFirstConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleFirstConnectivityChange);
  }

  handleFirstConnectivityChange = (data) => {
    console.log(data);
  };

  render() {
    return <Root />;
  }
}
