let
  React = require('react-native'),
  Profile = require('./Profile');

let {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} = React;

let styles = StyleSheet.create({
  container : {
    marginTop : 65,
    flex      : 1,
  },
  image :   {
    height : 350,
  },
  buttonText :  {
    fontSize  : 24,
    color     : 'white',
    alignSelf : 'center',
  },
});

class Dashboard extends React.Component {
  makeBackground(btn) {
    let buttonStyle = {
      flex           : 1,
      flexDirection  : 'row',
      alignSelf      : 'stretch',
      justifyContent : 'center',
    };

    if(btn === 0) {
      buttonStyle.backgroundColor = '#48BBEC';
    } else if(btn === 1)  {
      buttonStyle.backgroundColor = '#E77AAE';
    } else  {
      buttonStyle.backgroundColor = '#758BF4';
    }
    return buttonStyle;
  }

  goToProfile() {
    this.props.navigator.push({
      component: Profile,
      title: 'Profile Page',
      passProps: {userInfo: this.props.userInfo},
    });
  }

  goToRepos() {
    console.log('Going to Repos page');
  }

  goToNotes() {
    console.log('Going to Notes page');
  }

  render()  {
    console.log('Rendering Dashboard');
    return (
      <View style={styles.container}>
        <Image
          source = {{uri : this.props.userInfo.avatar_url}}
          style  = {styles.image}
        />
        <TouchableHighlight
          style         = {this.makeBackground(0)}
          onPress       = {this.goToProfile.bind(this)}
          underlayColor = "#88d4f5"
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style         = {this.makeBackground(1)}
          onPress       = {this.goToRepos.bind(this)}
          underlayColor = "#88d4f5"
        >
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style         = {this.makeBackground(2)}
          onPress       = {this.goToNotes.bind(this)}
          underlayColor = "#88d4f5"
        >
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = Dashboard;
