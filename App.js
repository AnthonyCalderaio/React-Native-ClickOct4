/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);
import {Container, Content, Header,Form, Input, Item, Button, Label} from 'native-base';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  signUpUser = (email, password) => {
    try{
      if(this.state.password.length<6)
      {
        alert["Please enter atleast 6 characters"]
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email,password)
    }
    catch(error){
      console.log(error.toString())
    }
  }

  logInUser = (email, password) => {
    try
    {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user){
        console.log(user)
      })

    }
    catch (error)
    {
      console.log(error.toString())
    }
  }


  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel> 
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={(email) => this.setState({email})}
            />
          </Item>

          <Item floatingLabel> 
            <Label>Password</Label>
            <Input
            secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={(password) => this.setState({password})}
            />
          </Item>

         <Button style={{marginTop: 10}}
          full
          rounded
          success
          onPress ={()=> this.logInUser(this.state.email, this.state.password)}
         >
            <Text style={{color: 'white'}}>Login</Text>
        </Button>

        <Button style={{marginTop: 10}}
          full
          rounded
          primary
          onPress = {()=> this.signUpUser(this.state.email, this.state.password)}
         >
            <Text style={{color: 'white'}}>Sign Up</Text>
        </Button>

        </Form>
      </Container>
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
