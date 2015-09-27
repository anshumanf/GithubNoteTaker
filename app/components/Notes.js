let
  React     = require('react-native'),
  api       = require('../utils/api'),
  Badge     = require('./Badge'),
  Separator = require('./helpers/Separator');

let {
  Text,
  View,
  ListView,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;

let styles = StyleSheet.create({
  container: {
    flex          : 1,
    flexDirection : 'column',
  },
  buttonText: {
    fontSize : 18,
    color    : 'white',
  },
  button: {
    flex            : 10,
    height          : 60,
    backgroundColor : '#48BBEC',
    alignItems      : 'center',
    justifyContent  : 'center',
  },
  noteInput: {
    flex     : 2,
    height   : 60,
    padding  : 10,
    fontSize : 18,
    color    : '#111',
  },
  rowContainer: {
    padding : 10,
  },
  footerContainer: {
    backgroundColor : '#E3E3E3',
    alignItems      : 'center',
    flexDirection   : 'row',
  },
});

class Notes extends React.Component {
  constructor(props)  {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state =  {
      dataSource : this.ds.cloneWithRows(this.props.notes),
      note       : '',
      error      : '',
    };
  }

  handleChange(event) {
    this.setState({
      note : event.nativeEvent.text,
    });
  }

  handleSubmit()  {
    let note = this.state.note;

    this.setState({
      note : '',
    });

    api.addNote(this.props.userInfo.login, note)
      .then((data) => {
        this.setState({
          dataSource : this.ds.cloneWithRows(data),
        });
      })
      .catch((error) => {
        console.log('Request failed', error);
        this.setState({error});
      });
  }

  renderRow(rowData) {
    console.log('Rendering row with note:', rowData);
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text>{rowData}</Text>
        </View>
        <Separator />
      </View>
    );
  }

  footer()  {
    return (
      <View style={styles.footContainer}>
        <TextInput
          style       = {styles.noteInput}
          value       = {this.state.note}
          onChange    = {this.handleChange.bind(this)}
          placeholder = "New note"
        />
        <TouchableHighlight
          style         = {styles.button}
          onPress       = {this.handleSubmit.bind(this)}
          underlayColor = "#88D4F5"
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }

  render()  {
    console.log('Initial Notes:', this.props.notes);
    return (
      <View style={styles.footContainer}>
        <ListView
          dataSource   = {this.state.dataSource}
          renderRow    = {this.renderRow}
          renderHeader = {() => <Badge userInfo={this.props.userInfo} />}
          renderFooter = {() => this.footer()}
        />
      </View>
    );
  }
}

Notes.propTypes = {
  userInfo : React.PropTypes.object.isRequired,
  notes    : React.PropTypes.object.isRequired,
};

module.exports = Notes;
