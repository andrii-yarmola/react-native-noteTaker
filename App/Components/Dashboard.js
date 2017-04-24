import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.title}> asd </Text>
        <Text style={styles.title}> asd </Text>
        <Text style={styles.title}> asd </Text>
        <Text style={styles.title}> asd </Text>
        <Text style={styles.title}> asd </Text>
        <Text style={styles.title}> asd </Text>
        <Text style={styles.title}> asd </Text>
        <Text style={styles.title}> {this.props.userInfo.url} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  image: {
    height: 350,
  },
  container: {
    flex: 1,
    marginTop: 65
  },
});

