/**changed gradle/wrapper/gradle-wrapper.properties: from gradle-3.5.1-all.zip
 * 
 * $ brew reinstall watchman
 * 
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * ------ command line installs: -------
 * $ brew reinstall watchman
 * # npm install react-native-maps --save
 * 
 * 1) gem install cocoapods
 * 2) $ cd ios
 * 3) $ pod init
 * 4) (inside ios folder) $ pod install
 * 
 *  react-native unlink react-native-maps && react-native link react-native-maps
 * 
 * for pods:
 * $ cd ios
 * $ pod init
 * $ pod update
 * 
 * 
 * 
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


import LoginScreen from '/Users/anthony/Desktop/Manifest/App1/src/screens/LoginScreen.js';
import SignUpScreen from '/Users/anthony/Desktop/Manifest/App1/src/screens/SignUpScreen.js'
import HomeScreen from '/Users/anthony/Desktop/Manifest/App1/src/screens/HomeScreen.js'

const AppStackNavigator = new StackNavigator({
  LoginScreen: {screen: LoginScreen}
  ,SignUpScreen: {screen: SignUpScreen}
  ,HomeScreen: {screen: HomeScreen,
  navigationOptions: {headerLeft: null}}
})

export default class App extends React.Component {
  render(){
    return(
      <AppStackNavigator/>
    );
  }
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
