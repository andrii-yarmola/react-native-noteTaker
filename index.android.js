import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Main from './App/Components/Main';

export default class githubNotetaker extends Component {
  render() {
    const routes = [
    {title: 'First Scene', name: 'Main'},
    {title: 'Second Scene', name: 'some'},
  ];
  return (
    <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}
      renderScene={(route, navigator) => {
        if (route.name == 'Main') {
          return <Main navigator={navigator} />
        }
        if (route.name == 'Home') {
          return <Main navigator={navigator} />
        }
        else
          return null
      }}
      configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
    />
  );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
