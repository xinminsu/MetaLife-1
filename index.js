import { AppRegistry, Platform } from 'react-native';
import App from './src/app/app.component';

AppRegistry.registerComponent('MetaLife', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('MetaLife', { rootTag });
}
