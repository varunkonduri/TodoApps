/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Todo from './components/screens/mainscreen';

AppRegistry.registerComponent(appName, () => Todo);
