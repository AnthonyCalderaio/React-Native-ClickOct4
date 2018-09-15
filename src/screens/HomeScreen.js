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


export default class HomeScreen extends Component {

    static navigationOptions = {
        headerleft: <Icon name="ios-ccamera-outline" style=
        {{paddingLeft:10}}
        />,
        title:"Click",
        headerRight:<Icon name="chatbubbles" style={{paddingRight:10}}/>
    }
  

    render (){
        return (
            <View>
                
                <MapView style = {styles.map}
                    initialRegion={{
                        latitude:59.329323499999999,
                        longitude:18.0685,
                        latitudeDelta:0.1,
                        longitudeDelta:0.1
                    }}
                >
                </MapView>

            </View>
        );
    }
}

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