import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class HomeScreen extends React.Component {
  componentDidMount() {
    // setTimeout(() => dataStore.fetchData(), 3000);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{ backgroundColor: 'blue', margin: 10 }}
          onPress={() => this.props.navigation.navigate('Calendar')}
        >
          <Text style={{ fontSize: 20 }}>navigate</Text>
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
