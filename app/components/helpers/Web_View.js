let React = require('react-native');

let {
  View,
  WebView,
  StyleSheet,
} = React;

let styles = StyleSheet.create({
  container : {
    flex            : 1,
    backgroundColor : '#F6F6EF',
    flexDirection   : 'column',
  },
});

class Web_View extends React.Component  {
  render()  {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url} />
      </View>
    );
  }
}

Web_View.propTypes =  {
  url : React.PropTypes.string.isRequired,
};


module.exports = Web_View;
