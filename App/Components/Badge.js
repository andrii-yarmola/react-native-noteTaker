import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Badge extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{ uri: this.props.userInfo.avatar_url}}
        />
        <Text style={styles.name}> {this.props.userInfo.name} </Text>
        <Text style={styles.handle}> {this.props.userInfo.login} </Text>
      </View>
    )
  }
}

Badge.propTypes = {
  userInfo: React.PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center',
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  name: {
    fontSize: 21,
    alignSelf: 'center',
    marginVertical: 10,
    color: 'white'
  },
  container: {
    padding: 10,
    backgroundColor: '#44bbec',
  },
});

