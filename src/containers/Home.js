import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react/native';
import netWorkStore from '@/Appstore/HomeStore';
import dataStore from '@/Appstore/DataStore';

@observer
class HomeScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => dataStore.fetchData(), 3000);
  }

  render() {
    console.log(dataStore.data.toJS());
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{dataStore.data.length}</Text>
        <Text>{dataStore.check}</Text>
        <TouchableOpacity
          style={{ backgroundColor: 'blue', margin: 10 }}
          onPress={() => dataStore.delete()}
        >
          <Text>delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'blue', margin: 10 }}
          onPress={() => dataStore.fetchData()}
        >
          <Text>fetchData</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
