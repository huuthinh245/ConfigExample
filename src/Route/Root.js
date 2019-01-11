import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '@/containers/Home';
import Login from '@/containers/Login';

const AppNavigator = createSwitchNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
