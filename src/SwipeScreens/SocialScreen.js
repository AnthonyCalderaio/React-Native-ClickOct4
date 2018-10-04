import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Container, Content } from 'native-base';
import CardComponent from '/Users/anthony/Desktop/Manifest/App1/src/screens/CardComponent.js';


class SocialScreen extends React.Component {
  render() {
    return (
      <Container styles="container">
        <Content>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
        </Content>
      </Container>
    );
  }
}

export default SocialScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  
    
}}
);

