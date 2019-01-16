import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import HomeScreen from '~/containers/Home/Home';
import Login from '~/containers/Auth/Login';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'dqwdwq',
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: 'yellow',
      },
    },
    headerBackTitleVisible: false,
    headerTransitionPreset: 'uikit',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 1000,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX }] };
      },
    }),
  },
);

export default createAppContainer(AppNavigator);
