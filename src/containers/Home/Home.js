import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react/native';
import dataStore from '~/Appstore/DataStore';

@observer
class HomeScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => dataStore.fetchData(), 3000);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{dataStore.data.length}</Text>
        <Text>{dataStore.check}</Text>
        <TouchableOpacity
          style={{ backgroundColor: 'blue', margin: 10 }}
          onPress={() => dataStore.delete()}
        >
          <Text style={{ fontSize: 20 }}>delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'blue', margin: 10 }}
          onPress={() => dataStore.fetchData()}
        >
          <Text style={{ fontSize: 20 }}>fetch Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'blue', margin: 10 }}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text style={{ fontSize: 20 }}>fetch Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
