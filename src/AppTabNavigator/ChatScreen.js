import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Icon } from 'native-base';


class ChatScreen extends React.Component {

//   static navigationOptions = {
//     tabBarIcon: ({tintColor})=> (
//         <Icon name="ios-chatbubbles" style ={{color: tintColor}}/>
//     ) 
   
// }
  render() {
    return (
      <View style={styles.container}>
       
        <Text>Chat</Text>
      </View>
    );
  }
}

export default ChatScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  
    
}}
);

