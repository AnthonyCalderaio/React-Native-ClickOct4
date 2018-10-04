import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Container, Content, Header,Form, Input, Item, Button, Label, Body} from 'native-base';
//npm install --save react-native-switch
import { Switch } from 'react-native-switch';
// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//       'Double tap R on your keyboard to reload,\n' +
//       'Shake or press menu button for dev menu',
//   });

  export default class App extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        business:'',
        social:''
      };
    }
    static navigationOptions = {
        
      title:"Create Account",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: '#0D0D0D'
      }
     
  }
  
    onButtonSwitch(value){
        if (this.refs.switchButton.value==true){
          value: false;
        }
        if (this.refs.switchButton.value==false){
          value: true;
        }
    }
      
  
  
  
    render() {
      return (

        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container style={styles.container}>
        <Item style={styles.switchButton}> 
        <Switch 
         //npm install --save react-native-switch
          style = {styles.switchButton}
          onChangeState={(state)=>{onButtonSwitch}}
          value={false}
          onValueChange={(val) => console.log(val)}
          //disabled={false}
          text1 = 'ON'
          text2 = 'OFF'
          activeText={'business'}
          inActiveText={'social'}
          circleSize={30}
          barHeight={20}
          circleBorderWidth={9}
          //backgroundActive={'green'}
          //backgroundInactive={'gray'}
          circleActiveColor={'#30a566'}
          circleInActiveColor={'#000000'}
          changeValueImmediately={true}
          //renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
          changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
      //innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
          outerCircleStyle={{}} // style for outer animated circle
          renderActiveText={true}
          renderInActiveText={true}
          switchLeftPx={5} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
          switchRightPx={5} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
          switchWidthMultiplier={8} 
          
          
       />
            </Item>
       
          <Form>
            <Item floatingLabel style={{marginTop: 10,marginLeft: 30,marginRight: 30,}}> 
              <Label>Name</Label>
              <Input style={{marginTop: 10,marginLeft: 10,marginRight: 10,}}
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={(email) => this.setState({email})}
              />
            </Item>
  
            <Item floatingLabel style={{marginTop: 10,marginLeft: 30,marginRight: 30,}}> 
              <Label>Age</Label>
              <Input 
              secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={(password) => this.setState({password})}
              />
            </Item>
            
            <Item floatingLabel style={{marginTop: 10,marginLeft: 30,marginRight: 30,}}> 
              <Label>Phone</Label>
              <Input 
              id=""
              secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={(password) => this.setState({password})}
              />
            </Item>

            <Item floatingLabel style={{marginTop: 10,marginLeft: 30,marginRight: 30,}}> 
              <Label>Locaton</Label>
              <Input 
              secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={(password) => this.setState({password})}
              />
            </Item>
            <Item floatingLabel style={{marginTop: 10,marginLeft: 30,marginRight: 30,marginBottom:20}}> 
              <Label>Info</Label>
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
            primary
            onPress = {()=> navigate()}
           >
              <Text style={{color: 'white'}}>Sign Up</Text>
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
      backgroundColor: '#000000',
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
    switchButton:{
      marginLeft: 50,
      marginBottom: 50
      
    }
  });
  