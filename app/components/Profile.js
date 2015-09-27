let
  React     = require('react-native'),
  Badge     = require('./Badge'),
  Separator = require('./helpers/Separator');

let {
  Text,
  View,
  StyleSheet,
  ScrollView,
} = React;

let styles = StyleSheet.create({
  container: {
    flex : 1,
  },
  buttonText: {
    fontSize  : 18,
    color     : 'white',
    alignSelf : 'center',
  },
  rowContainer: {
    padding : 10,
  },
  rowTitle: {
    color    : '#48BBEC',
    fontSize : 16,
  },
  rowContent: {
    fontSize : 19,
  },
});

class Profile extends React.Component {
  getRowTitle(userInfo, item) {
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }

  render()  {
    let
      userInfo = this.props.userInfo,
      topicList = [
        'company',
        'location',
        'followers',
        'following',
        'email',
        'bio',
        'public_repos',
      ],
      rowList = topicList.map((item, index) => {
        if(!userInfo[item]) {
          return <View key={index} />;
        } else  {
          return (
            <View key={index}>
              <View style={styles.rowContainer}>
                <Text style={styles.rowTitle}>
                  {this.getRowTitle(userInfo, item)}
                </Text>
                <Text style={styles.rowContent}>
                  {userInfo[item]}
                </Text>
              </View>
              <Separator />
            </View>
          );
        }
      });
    return (
      <ScrollView
        style = {styles.container}
      >
        <Badge userInfo = {userInfo} />
        {rowList}
      </ScrollView>
    );
  }
}

module.exports = Profile;
