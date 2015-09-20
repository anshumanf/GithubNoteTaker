/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
let
  React = require('react-native'),
  {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
  } = React,
  Main = require('./app/components/Main');

let styles = StyleSheet.create({
  container:{
    flex            : 1,
    backgroundColor : '#111111',
  },
});

class GithubNoteTaker extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute = {{
          title     : 'Github NoteTaker',
          component : Main,
        }}
        style        = {styles.container}
      />
    );
  }
}

AppRegistry.registerComponent('GithubNoteTaker', () => GithubNoteTaker);
