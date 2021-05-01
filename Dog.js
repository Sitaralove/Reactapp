import React, { Component } from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';
import dog from './assets/doggy.jpeg'

//defines class component 
class Dog extends Component {
    render() {
            return (
              <View>
                <Text>
                  My name is {this.props.name}!
                </Text>
                <Image source={dog} style={{ width:400, height: 300 }} />       
        </View>
      );
    }
  }

  export default Dog;
