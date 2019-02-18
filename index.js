import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import configGoogle from './google';
import Location from './backgroundLocation';
//configGoogle();
AppRegistry.registerComponent(appName, () => App);
