import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './screens/todo/Todo.js';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import * as Colors from 'material-ui-colors';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000000',
    accent: Colors.blue[500],
  }
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Todo/>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
