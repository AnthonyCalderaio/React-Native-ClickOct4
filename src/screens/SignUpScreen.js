import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA7zNV2Y_s3mq4L5usKvT_Sw4cfdzcxdwI",
      authDomain: "clickfirebase-14bb6.firebaseapp.com",
      databaseURL: "https://clickfirebase-14bb6.firebaseio.com",
      projectId: "clickfirebase-14bb6",
      storageBucket: "clickfirebase-14bb6.appspot.com",
      messagingSenderId: "720992110955"
  };

  //firebase.initializeApp(firebaseConfig);
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

            <Item floatingLabel> 
              <Label>Re-enterPassword</Label>
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
            primary
            onPress = {()=> navigate()}
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
  