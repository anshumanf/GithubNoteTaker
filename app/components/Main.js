let
  React = require('react-native'),
  {
    View,
    Text,
    StyleSheet,
  } = React;

let styles = StyleSheet.create({
  mainContainer: {
    flex            : 1,
    padding         : 30,
    marginTop       : 65,
    flexDirection   : 'column',
    justifyContent  : 'center',
    backgroundColor : '#48BBEC',
  },
});

class Main extends React.Component  {
  render()  {
    return (
      <View style={styles.mainContainer}>
        <Text>Testing the Router</Text>
      </View>
    );
  }
}

module.exports = Main;
