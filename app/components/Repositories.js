let
  React = require('react-native'),
  Badge = require('./Badge'),
  Separator = require('./helpers/Separator');

let {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} = React;

let styles = StyleSheet.create({
  container: {
    flex : 1,
  },
  rowContainer: {
    flexDirection : 'column',
    flex          : 1,
    padding       : 10,
  },
  name: {
    color         : '#48BBEC',
    fontSize      : 18,
    paddingBottom : 5,
  },
  stars: {
    color         : '#48BBEC',
    fontSize      : 14,
    paddingBottom : 5,
  },
  description: {
    fontSize      : 14,
    paddingBottom : 5,
  },
});

class Repositories extends React.Component  {
  openPage(url)  {
    console.log('The URL is', url);
  }

  render()  {
    let
      repos = this.props.repos,
      rowList = repos.map((item, index) => {
        let desc = repos[index].description
          ? <Text style={styles.description}> {repos[index].description} </Text>
          : null;

        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <TouchableHighlight
                onPress       = {this.openPage.bind(this, repos)}
                underlayColor = "transparent"
              >
                <Text style={styles.name}>{repos[index].name}</Text>
              </TouchableHighlight>
              <Text style={styles.stars}>Stars: {repos[index].stargazers_count}</Text>
              {desc}
            </View>
            <Separator />
          </View>
        );
      });
    return (
      <ScrollView style={styles.comtainer}>
        <Badge userInfo={this.props.userInfo} />
        {rowList}
      </ScrollView>
    );
  }
}

Repositories.propTypes = {
  userInfo : React.PropTypes.object.isRequired,
  repos    : React.PropTypes.array.isRequired,
};

module.exports = Repositories;
