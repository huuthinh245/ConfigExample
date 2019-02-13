import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';

export default class CalendarTest extends React.Component {
  async componentDidMount() {
    RNCalendarEvents.authorizeEventStore();
    const a = await RNCalendarEvents.authorizationStatus();
    console.log(a);
  }

  _saveDate = () => {
    const data = new Date();
    RNCalendarEvents.saveEvent('test react native', {
      startDate: '2019-01-22T19:26:00.000Z',
      endDate: '2019-01-22T19:26:00.000Z',
      notes: 'Test save',
    }).then(a => console.log(a));
  };

  render() {
    return (
      <TouchableOpacity style={{ backgroundColor: 'chocolate' }} onPress={this._saveDate}>
        <Text style={{ margin: 10 }}>save</Text>
      </TouchableOpacity>
    );
  }
}
