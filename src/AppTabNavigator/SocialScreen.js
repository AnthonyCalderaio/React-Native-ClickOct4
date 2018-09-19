import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';



class SocialScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
        <Text>Social</Text>
      </View>
    );
  }
}

export default SocialScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  
    
}}
);

