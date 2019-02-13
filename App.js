import React, { Component } from 'react';
import { Provider  } from 'react-redux';
import { NetInfo } from 'react-native';
import Root from '~/Route/Root';
import NavigationService from './src/Route/NavigationService';
import stores from './src/configStore/store';

export default class App extends Component {
  componentDidMount() {
    NetInfo.isConnected.fetch().then((isConnected) => {});
    NetInfo.addEventListener('connectionChange', this.handleFirstConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleFirstConnectivityChange);
  }

  handleFirstConnectivityChange = (data) => {
    console.log(data);
  };

  render() {
    return (
      <Provider  store={stores}>
        <Root 
          ref ={ navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </Provider >
    );
  }
}
