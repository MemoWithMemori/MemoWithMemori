/**
 * @format
 */
import './shim';
// import crypto from 'crypto';
import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
