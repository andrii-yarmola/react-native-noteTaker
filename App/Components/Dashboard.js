import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

export default class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {this.props.userInfo.url} </Text>
        <Image
           style={{width: 50, height: 50}}
          source={{uri: this.props.userInfo.avatar_url  }}
        />
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

