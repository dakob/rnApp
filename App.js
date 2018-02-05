import React from 'react';
import { StyleSheet, View } from 'react-native';
import CText from './src/components/textComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CText text="Open up App.js to start working on your app" />
        <CText text="Changes you make will automatically reload" />
        <CText text="Shake your phone to open the developer menu." />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
