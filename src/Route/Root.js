import React from 'react';
import {
  Text, Dimensions
} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  StackViewTransitionConfigs,
  createDrawerNavigator
} from 'react-navigation';
import HomeScreen from '~/containers/Home/Home';
import Login from '~/containers/Auth/Login';
import Calendar from '~/containers/Calendar/calendar';
import { transition } from './transitionConfig';

const { width } = Dimensions.get('screen');
const IOS_MODAL_ROUTES = ['Calendar'];

const dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  const isModal = IOS_MODAL_ROUTES.some(
    screenName => screenName === transitionProps.scene.route.routeName
      || (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName),
  );
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    isModal,
  );
};

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Calendar: {
      screen: Calendar,
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Home',
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: 'blanchedalmond',
      },
    },
    transitionConfig: dynamicModalTransition,
  },
);

const LoginStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Login',
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: 'blanchedalmond',
      },
    },
    transitionConfig: transition,
  },
);
const CalendarStack = createStackNavigator(
  {
    Calendar: {
      screen: Calendar,
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Calendar',
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: 'blanchedalmond',
      },
    },
    transitionConfig: transition,
  },
);

const TabNavigator = createBottomTabNavigator({
  LoginStack,
  HomeStack,
  CalendarStack,
}, {
  swipeEnabled: true,
  animationEnabled: true,
});
HomeStack.navigationOptions = ({ navigation }) => {
  console.log(navigation);
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: 'dsads',
  };
};

class DrawMenu extends React.Component {
  render(){
    return(
      <Text>ITEM</Text>
    )
  }
}
const MyDrawerNavigator = createDrawerNavigator({
  Tabs: {
    screen: TabNavigator,
  }
}, 
{
  contentComponent: DrawMenu,
  drawerWidth: width/4
});

export default createAppContainer(MyDrawerNavigator);
