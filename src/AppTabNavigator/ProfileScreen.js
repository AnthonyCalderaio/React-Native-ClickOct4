
//ErrorMessage: Unrecognized font family "Ionicons"
//Solved:   $npm install react-native-vector-icons --save 
//Solved... (THEN: react-native run-ios)
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Icon } from 'native-base';


class ProfileScreen extends React.Component {

    // static navigationOptions = {
    //     tabBarIcon: ({tintColor})=> (
    //         <Icon name="ios-person" style ={{color: tintColor}}/>
    //     ) 
       
    // }

  render() {
    return (
      <View style={styles.container}>
       
        <Text>Profile</Text>
      </View>
    );
  }
}

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  
    
}}
);

