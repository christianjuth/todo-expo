import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { FAB } from 'react-native-paper';
import * as Colors from 'material-ui-colors';
import CheckRow from './CheckRow';


class Todo extends React.PureComponent{
  state = {
    focused: false,
    todoItems: []
  }

  constructor(props) {
    super(props);
    this.date = this.formatDate(new Date());
  }

  handleFocus() {
    this.setState({
      focused: true
    });
  }

  handleSubmit({nativeEvent}) {
    let clone = this.state.todoItems.slice();
    clone.unshift(nativeEvent.text);
    this.setState({
      focused: false,
      todoItems: clone
    });
  }

  formatDate(date) {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    const daysOfWeek = [
      'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Satur'
    ];
    return daysOfWeek[date.getDay()]+'day, ' + months[date.getMonth()] + ' ' + date.getDate();
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.statusBar}/>
          <Text style={styles.date}>{this.date}</Text>
          {
            this.state.focused ? (
              <TextInput
                style={styles.input}
                autoFocus
                ref={(elm) => { this.textInput = elm; }}
                onSubmitEditing={this.handleSubmit.bind(this)}
                placeholder='todo'
              />
            ) : (
              <TouchableOpacity onPress={this.handleFocus.bind(this)}>
                <Text style={styles.title}>To-Do List</Text>
              </TouchableOpacity>
            )
          }
        </View>
        <ScrollView>
          {this.state.todoItems.map((title, i) => (
            <CheckRow key={i} title={title}/>
          ))}
        </ScrollView>
        <FAB
          style={styles.fab}
          dark={false}
          icon="add"
          onPress={this.handleFocus.bind(this)}
        />
      </View>
    )
  }
}

export default Todo;

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  statusBar: {
    height: Constants.statusBarHeight,
  },

  header: {
    padding: 15,
    paddingTop: 10,
    backgroundColor: '#fff',
    shadowColor: Colors.grey[300],
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },

  date: {
    color: Colors.grey[600],
    marginBottom: 10
  },

  title: {
    fontSize: 30,
    fontWeight: '700'
  },

  input: {
    fontSize: 30,
  },

  fab: {
    elevation: 0,
    position: 'absolute',
    bottom: 15,
    right: 15
  }

  // rest of the styles
});
