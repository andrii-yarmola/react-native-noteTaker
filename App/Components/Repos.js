import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import Badge from './Badge';
import Separator from './Helpers/Separator';

export default class Repos extends Component {

  render() {
    const repos = this.props.repos;
    const list = repos.map((item, i) => {
      const desc = repos[i].description ? <Text style={styles.description}> {repos[i].description} </Text> : <View/>;
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={console.log('1')}
              underlayColor='transparent'>
              <Text style={styles.name}>{repos[index].name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
            {desc}
          </View>
          <Separator/>
        </View>
      )
    })
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'white'
  },
  rowContainer: {
    padding: 10,
    flexDirection: 'column',
    flex: 1
  },
  name: {
    color: '#48bbec',
    fontSize: 16,
    paddingBottom: 10
  },
  stars: {
    color: '#48bbec',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  },
});