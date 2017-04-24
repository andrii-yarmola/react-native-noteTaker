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
import Dashboard from './App/Components/Dashboard';

export default class githubNotetaker extends Component {
  render() {
    return (
      <Navigator
        initialRoute= {{ title: 'Wellcome to Github Searcher', name: 'Main' }}
        renderScene={(route, navigator) => {
          if (route.name == 'Main') {
            return <Main navigator={navigator} {...route.passProps}/>
          }
          if (route.name == 'Dashboard') {
            return <Dashboard navigator={navigator} {...route.passProps} />
          }
          else
            return null
        }}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
                {
                  if(index > 0) {
                    return (
                      <TouchableHighlight
                        underlayColor="transparent"
                        onPress={() => { if (index > 0) { navigator.pop() } }}>
                        <Text style={ styles.NavButtonText }>Back</Text>
                      </TouchableHighlight>)
                  } 
                  else { return null }
                },
              RightButton: (route, navigator, index, navState) =>
                {
                  if (route.onPress) return (
                    <TouchableHighlight
                       onPress={ () => route.onPress() }>
                       <Text style={ styles.NavButtonText }>
                            { route.rightText || 'Right Button' }
                       </Text>
                     </TouchableHighlight>)
                },
              Title: (route, navigator, index, navState) =>
                { return (<Text>{ route.title || '' }</Text>); },
             }}
            style={styles.navBar}
            navigationStyles={Navigator.NavigationBar.StylesIOS}
           />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
  },
  NavButtonText: {
    marginHorizontal: 10,
  },
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
