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
    RNCalendarEvents.saveEvent('valentine day', {
      startDate: data.toISOString(),
      endDate: data.toISOString(),
      description: 'valentine',
    }).then(a => console.log(a)).catch(e => console.log(e));
  };

  render() {
    return (
      <TouchableOpacity style={{ backgroundColor: 'chocolate' }} onPress={this._saveDate}>
        <Text style={{ margin: 10 }}>save</Text>
      </TouchableOpacity>
    );
  }
}
