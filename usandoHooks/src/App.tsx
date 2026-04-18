import React from 'react';
import { View } from 'react-native';
import { appStyles } from './App.style';
import { Calculator } from './Screens';

export class App extends React.Component {
  render() {
    return (
      <View style={appStyles.safeArea}>
        <View style={appStyles.container}>
          <Calculator />
        </View>
      </View>
    );
  }
}

export default App;
