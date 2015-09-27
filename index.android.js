let
  React = require('react-native'),
  {
    AppRegistry,
    StyleSheet,
    Navigator,
  } = React,
  Main = require('./app/components/Main');

let styles = StyleSheet.create({
  container:{
    flex            : 1,
    backgroundColor : '#111111',
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#000',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarButtonText: {
    color: '#00f',
  },
});

// TODO Fix this to add a navigation bar to the top of the screen, then use the same setup for iOS as well

// let NavigationBarRouteMapper = {

//   LeftButton: function(route, navigator, index, navState) {
//     if (index === 0) {
//       return null;
//     }

//     let previousRoute = navState.routeStack[index - 1];
//     return (
//       <TouchableOpacity
//         onPress={() => navigator.pop()}
//         style={styles.navBarLeftButton}>
//         <Text style={[styles.navBarText, styles.navBarButtonText]}>
//           {previousRoute.title}
//         </Text>
//       </TouchableOpacity>
//     );
//   },

//   Title: function(route, navigator, index) {
//     return (
//       <Text style={[styles.navBarText, styles.navBarTitleText]}>
//         {route.title} [{index}]
//       </Text>
//     );
//   },

// };

class GithubNoteTaker extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute  = {{
          name  : 'Github NoteTaker',
          index : 0,
        }}
        renderScene   = {
          (route, navigator) =>
            <Main
              name      = {route.name}
              navigator = {navigator}
            />
        }
        // navigationBar = {
        //   <Navigator.NavigationBar
        //     routeMapper = {NavigationBarRouteMapper}
        //     style       = {styles.navBar}
        //   />
        // }
        style         = {styles.container}
      />
    );
  }
}

AppRegistry.registerComponent('GithubNoteTaker', () => GithubNoteTaker);
