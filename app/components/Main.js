let
  React = require('react-native'),
  api   = require('../utils/api'),
  Dashboard = require('./Dashboard');

let {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
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
  title: {
    marginBottom : 20,
    fontSize     : 25,
    textAlign    : 'center',
    color        : '#fff',
  },
  searchInput: {
    height       : 50,
    padding      : 4,
    marginRight  : 5,
    fontSize     : 23,
    borderWidth  : 1,
    borderColor  : 'white',
    borderRadius : 8,
    color        : 'white',
  },
  buttonText: {
    fontSize  : 18,
    color     : '#111',
    alignSelf : 'center',
  },
  button: {
    height          : 45,
    flexDirection   : 'row',
    backgroundColor : 'white',
    borderColor     : 'white',
    borderWidth     : 1,
    borderRadius    : 8,
    marginBottom    : 10,
    marginTop       : 10,
    alignSelf       : 'stretch',
    justifyContent  : 'center',
  },
  loadingIndicatorContainer : {
    flexDirection  : 'row',
    alignSelf      : 'stretch',
    justifyContent : 'center',
  },
  loadingIndicator : {
    alignSelf : 'center',
  },
  errorText : {
    textAlign : 'center',
    color     : '#fff',
  },
});

class Main extends React.Component  {
  constructor(props)  {
    super(props);
    this.state = {
      username  : '',
      isLoading : false,
      error     : false,
    };
  }

  handleChange(event)  {
    this.setState({
      username : event.nativeEvent.text,
    });
  }

  handleSubmit()  {
    // update our IndicatorIOS spinner
    // fetch data from Github
    // reroute to the next view passing that Github info
    this.setState({
      isLoading : true,
    });

    api.getBio(this.state.username)
      .then((response) => {
        if(response.message === 'Not Found')  {
          this.setState({
            error     : 'User not found',
            isLoading : false,
          });
        } else  {
          // TODO The following does not work for Android, and pushes another
          // instance of Main instead
          this.props.navigator.push({
            title     : response.name || 'Select an Option',
            component : Dashboard,
            passProps : {userInfo : response},
          });
          this.setState({
            isLoading : false,
            error     : false,
            username  : '',
          });
        }
      });
  }

  render()  {
    let
      showError = (
        this.state.error ? <Text style={styles.errorText}>{this.state.error}</Text> : null
      ),
      showLoading = (
        this.state.isLoading ? (
          <View style={styles.loadingIndicatorContainer}>
            <ActivityIndicatorIOS
              animating = {this.state.isLoading}
              color     = "#111"
              size      = "large"
              style     = {styles.loadingIndicator}
            />
            <ProgressBarAndroid
              styleAttr ="Large"
              style     = {styles.loadingIndicator}
            />
          </View>
        ) : null
      );
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for a Github User</Text>
        <TextInput
          style    = {styles.searchInput}
          value    = {this.state.username}
          onChange = {this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style         = {styles.button}
          onPress       = {this.handleSubmit.bind(this)}
          underlayColor = "white"
        >
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        {showError}
        {showLoading}
      </View>
    );
  }
}

module.exports = Main;
