import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { GoogleSignin } from 'react-native-google-signin';
import OneSignal from 'react-native-onesignal';
import FBSDK, { LoginManager, AccessToken, LoginButton } from 'react-native-fbsdk';
import { loginAction } from './action';
import NavigationService from '~/Route/NavigationService';
const { GraphRequest, GraphRequestManager } = FBSDK;
class App extends Component {
  componentDidMount() {
    console.log('fewfe');
    OneSignal.init('1dd5d2bd-e17a-45a3-9d86-ec38d4b725e7');
    OneSignal.setSubscription(true);
    OneSignal.inFocusDisplaying(2);
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  onReceived = (notification) => {
    console.log('Notification received: ', notification);
  };

  onOpened = (openResult) => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  };

  onIds = (device) => {
    console.log('Device info: ', device);
  };

  _signInGoogle = () => {
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log('err', err.code);
      })
      .done();
  };

  _getInfoFb = async () => {
    const data = await AccessToken.getCurrentAccessToken();
    const infoRequest = new GraphRequest(
      '/me',
      {
        parameters: {
          fields: {
            string: 'email,name,location,birthday,photos', // what you want to get
          },
          access_token: {
            string: data.accessToken, // put your accessToken here
          },
        },
      },
      this._responseInfoCallback,
    );

    new GraphRequestManager().addRequest(infoRequest).start();
  };

  _responseInfoCallback = (err, result) => {
    console.log(err);
    console.log(result);
  };

  _signInFacebook = () => {
    LoginManager.logOut();
    LoginManager.logInWithReadPermissions(['public_profile'])
      .then((res) => {
        this._getInfoFb();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _login = () => {
    // this.props.dispatch(loginAction());
    this.props.login();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ backgroundColor: 'silver' }} onPress={this._signInGoogle}>
          <Text style={{ margin: 10 }}>login google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'silver' }} onPress={() => NavigationService.navigate('Home')}>
          <Text style={{ margin: 10 }}>login google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'silver' }} onPress={this._login}>
          <Text style={{ margin: 10 }}>login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'silver', margin: 10 }}
          onPress={this._signInFacebook}
        >
          <Text style={{ margin: 10 }}>facebook</Text>
        </TouchableOpacity>
        <View>
          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log(`login has error: ${result.error}`);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  console.log(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => console.log('logout.')}
          />
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  login: () => dispatch(loginAction()),
});
App.propTypes = {
  login: PropTypes.func.isRequired,
};
export default connect(
  null,
  mapDispatchToProps,
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
