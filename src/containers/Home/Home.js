import React from 'react';
import {
  View, Dimensions
} from 'react-native';
// import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import { styles } from './styles';
import { decode } from '../../../test'; // decode from api geo

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: []
    };
  }

  componentDidMount() {

  }

  getPosition = (e) => {
    console.log(e.nativeEvent.coordinate);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={styles.map}
          onPress={this.getPosition}
          region={{
            latitude: 10.767292,
            longitude: 106.746970,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        />
      </View>
    );
  }
}
// HomeScreen.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func.isRequired,
//   }).isRequired,
// };

export default HomeScreen;
