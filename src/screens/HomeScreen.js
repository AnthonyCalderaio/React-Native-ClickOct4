//@ion Icons from: https://ionicons.com/


import React, {Component} from 'react';
import {
    View, 
    Text,
    StyleSheet
} from "react-native";
import { Icon } from 'native-base';
import MapView from 'react-native-maps';
import {StackNavigator} from 'react-navigation';
import { TabNavigator } from 'react-navigation'
import  ProfileScreen  from '/Users/anthony/Desktop/Manifest/App1/src/AppTabNavigator/ProfileScreen.js';
import  ChatScreen  from '/Users/anthony/Desktop/Manifest/App1/src/AppTabNavigator/ChatScreen.js';
import  BusinessScreen  from '/Users/anthony/Desktop/Manifest/App1/src/AppTabNavigator/BusinessScreen.js';
import  SocialScreen  from '/Users/anthony/Desktop/Manifest/App1/src/AppTabNavigator/SocialScreen.js';
import  MapScreen  from '/Users/anthony/Desktop/Manifest/App1/src/AppTabNavigator/MapScreen.js';




const AppTabNavigator = TabNavigator({
    ProfileTab: {
        screen: ProfileScreen
    },
    ChatTab: {
        screen: ChatScreen
    },BusinessTab: {
        screen: BusinessScreen
    },SocialTab: {
        screen: SocialScreen
    },MapTab: {
        screen: MapScreen
    }
})

class HomeScreen extends React.Component {



    static navigationOptions = {
        
        title:"Click"
       
    }
  

    render (){
        return (
            <AppTabNavigator/>
        );
    }
}
export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom:0,
        right:0,
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    map:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right:0
    }
});