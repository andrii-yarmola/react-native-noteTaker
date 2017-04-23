import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> 123 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#48bbec',
  },

});

