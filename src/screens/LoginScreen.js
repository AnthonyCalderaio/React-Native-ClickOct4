import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, DeviceEventEmitter, Image,TouchableWithoutFeedback, Keyboard} from 'react-native';
import * as firebase from 'firebase';
// import {StackNavigator} from 'react-navigation';
// import RNFirebasePhoneAuth from 'react-native-firebase-phone-auth';
//For image in header
import Logo from '/Users/anthony/Desktop/Manifest/App1/src/assets/Logo_Black220x220.jpg';
const firebaseConfig = {
    apiKey: "AIzaSyA7zNV2Y_s3mq4L5usKvT_Sw4cfdzcxdwI",
      authDomain: "clickfirebase-14bb6.firebaseapp.com",
      databaseURL: "https://clickfirebase-14bb6.firebaseio.com",
      projectId: "clickfirebase-14bb6",
      storageBucket: "clickfirebase-14bb6.appspot.com",
      messagingSenderId: "720992110955"
  };

  firebase.initializeApp(firebaseConfig);
import {Container, Content, Header,Form, Input, Item, Button, Label} from 'native-base';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

  export default class LoginScreen extends React.Component {

    static navigationOptions = {
        
      title:"Login",
    //For image in header
    //   headerTitle: (
    //     <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    //         <Image
    //             source={image}
    //             style={{width:110, height:18}}
    //         />
    //     </View>
    // ),


      headerTintColor: "white",
      headerStyle: {
        backgroundColor: '#0D0D0D'
      }
     
  }

    
    constructor(props){
      super(props)
      //window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

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
        //
        var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
        firebase.auth().signInAndRetrieveDataWithCredential(credential);
        

        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult){
          console.log(user)
          window.confirmationResult = confirmationResult;
        })
  
      }
      catch (error)
      {
        console.log(error.toString())
      }
    }
  
  
    render() {
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container style={styles.container}>
        <Image 
        source={(Logo)}
        style={styles.Logo}
        />
          <Form>

           
            <Item floatingLabel style={{marginTop: 10,marginLeft: 30,marginRight: 30,}}> 
              <Label>Phone</Label>
              <Input
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={(email) => this.setState({email})}
              />
            </Item>
  
            <Item floatingLabel style={{marginTop: 10,marginLeft: 30,marginRight: 30,}}> 
              <Label>Password</Label>
              <Input
              secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={(password) => this.setState({password})}
              />
            </Item>
  
           <Button style={{marginTop: 10,marginLeft: 20,marginRight: 20,}}
            full
            rounded
            success
            onPress ={()=> this.logInUser(this.state.email, this.state.password)}
           >
              <Text style={{color: 'white'}}>Login</Text>
          </Button>
  
          <Button style={{marginTop: 10,marginLeft: 20,marginRight: 20,}}
            full
            rounded
            primary
            onPress = {() => this.props.navigation.navigate('SignUpScreen')}
           >
              <Text style={{color: 'white'}}>Create Account</Text>
          </Button>
          <Button style={{marginTop: 10,marginLeft: 20,marginRight: 20,}}
            full
            rounded
            primary
            onPress = {() => this.props.navigation.navigate('HomeScreen')}
           >
              <Text style={{color: 'white'}}>Home(Test)</Text>
          </Button>
          
  
          </Form>
        </Container>
        </TouchableWithoutFeedback>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0D0D0D',
      justifyContent: 'center',
      
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
    Logo: {
      
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:75,
      marginRight:75

     
    }
  });
  