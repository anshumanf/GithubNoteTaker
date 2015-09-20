/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

let React = require('react-native');
let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

let styles = StyleSheet.create({
  container: {
    flex            : 1,
    justifyContent  : 'center',
    alignItems      : 'center',
    backgroundColor : '#F5FCFF',
  },
  welcome: {
    fontSize  : 20,
    textAlign : 'center',
    margin    : 10,
  },
  instructions: {
    textAlign    : 'center',
    color        : '#333333',
    marginBottom : 5,
  },
});

class GithubNoteTaker extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Github NoteTaker!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('GithubNoteTaker', () => GithubNoteTaker);
