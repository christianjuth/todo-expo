import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import * as Colors from 'material-ui-colors';
import { Checkbox } from 'react-native-paper';
import Ripple from 'react-native-material-ripple';


class CheckRow extends React.PureComponent{
  state = {
    checked: false
  }

  toggle() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    let props = this.props;
    return(
      <Ripple
        style={styles.container}
        onPress={this.toggle.bind(this)}
        rippleColor='rgba(0,0,0,0.4)'
        rippleDuration={300}
      >
        <Text style={styles.title}>{props.title}</Text>
        <Checkbox.Android
          status={this.state.checked ? 'checked' : 'unchecked'}
        />
      </Ripple>
    )
  }
}

export default CheckRow;

const styles = StyleSheet.create({

  container: {
    paddingRight: 5,
    paddingLeft: 15,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },

  title: {
    flexGrow: 1
  },
});
