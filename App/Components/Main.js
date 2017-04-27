import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, ActivityIndicator } from 'react-native';
import api from '../Utils/api'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }
  
  handleChange(e){
    this.setState({
      username: e.nativeEvent.text
    });
  }
  
  handleSubmit(e){
    this.setState({
      isLoading: true
    });
    api.getBio(this.state.username)
      .then((res) => {
        if(res.message === 'Not Found') {
          this.setState({
            error: 'User Not Found',
            isLoading: false
          });
        } else {
          this.setState({
            error: false,
            isLoading: false,
            username: ''
          });
          this.props.navigator.push({
            title: res.name || 'Select an Option',
            name: 'Dashboard',
            passProps: {userInfo: res}
          });
        }
      })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Search for Github user </Text>
        <TextInput
          onChange={this.handleChange.bind(this)}
          value={this.state.username}
          style={styles.input}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlineColor='white'
        >
        <Text style={styles.buttonText}> Search </Text>
        </TouchableHighlight>
        { this.state.isLoading && 
          <ActivityIndicator
            animating={this.state.isLoading}
            style={[styles.centering, {height: 80}]}
            size="large"
          />
        }
        { this.state.error && <Text> {this.state.error} </Text> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: '#48bbec',
    alignSelf: 'center'
  },
  title: {
    marginBottom: 20,
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  button: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center'
  },
  input: {
    marginBottom: 20,
    fontSize: 30,
    color: 'white'
  },
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#48bbec',
  },
});

