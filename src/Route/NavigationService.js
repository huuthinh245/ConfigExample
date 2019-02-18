import { NavigationActions } from 'react-navigation';
import { flow } from 'mobx';
let _navigator;

function setTopLevelNavigator(navigationRef){
    _navigator =navigationRef;
}
/**
 * @param {String} routeName 
 * 
 */

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