
//ErrorMessage: Unrecognized font family "Ionicons"
//Solved:   $npm install react-native-vector-icons --save 
//Solved... (THEN: react-native run-ios)
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Icon } from 'native-base';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';

class MapScreen extends React.Component {

    // static navigationOptions = {
    //     tabBarIcon: ({tintColor})=> (
    //         <Icon name="ios-person" style ={{color: tintColor}}/>
    //     ) 
       
    // }

  render() {
    return (
      <View style={styles.container}>
       
        
        <MapView
         style={styles.map}
         initialRegion={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
       </MapView>
      </View>
    );
  }
}

export default MapScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
    map: {
      left:0,
      right: 0,
      top:0,
      bottom:0,
      position: 'absolute'
    }

}
);

