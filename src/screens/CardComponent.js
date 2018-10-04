import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import {
    Card,
    CardItem,
    Thumbnail,
    Body,
    Left,
    Right,
    Button,
    Icon
} from 'native-base';

class CardComponent extends React.Component {

  render() {
    return (
      <Card>
          <CardItem>
              <Left>
                  <Thumbnail 
                  style={{height:150}}
                  source={require('../assets/me.jpg')}/>
                  <Thumbnail 
                  style={{height:150}}
                  source={require('../assets/me.jpg')}/>
                    <FlatList
                    horizontal= {true}
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                    />
                  <Body>
                      
                  </Body>    
              </Left>
          </CardItem>
          
          
      </Card>
      
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  
    
}}
);

