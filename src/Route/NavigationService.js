import { NavigationActions } from 'react-navigation';
let _navigator;

function setTopLevelNavigator(navigationRef){
    _navigator =navigationRef;
}

const navigate = (routeName) => {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
        })
    )
}

export default {
    navigate,
    setTopLevelNavigator,
  };