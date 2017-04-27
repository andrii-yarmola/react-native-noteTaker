import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

export default class Dashboard extends Component {
  makeBackground(btn) {
    const obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    
    if(btn === 0) {
      obj.backgroundColor = '#48bbec'
    } else if (btn === 1) {
      obj.backgroundColor = '#e77aae'
    } else {
      obj.backgroundColor = '#758bf4'
    }
    
    return obj;
  }
  
  goToProfile() {
    
  }
  
  goToRepos() {
    
  }
  
  goToNotes() {
    
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: this.props.userInfo.avatar_url }}
        />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
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

