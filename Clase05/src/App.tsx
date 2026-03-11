import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { CountScreen } from './components';
import { colors } from './Themes';
import { appStyles } from './App.style';

type AppProps = {
  attribute: string;
};

export class App extends React.Component<AppProps> {
  private count: number = 0;

  handleOnPress = () => {
    console.log('Button pressed!');
    this.count++;
    console.log(`Current count: ${this.count}`);
  };

  render() {
    return (
      <SafeAreaProvider>
        <StatusBar barStyle='light-content' backgroundColor={colors.white} />
        <SafeAreaProvider style={appStyles.safeArea}>
          <View style={appStyles.container}>
            <CountScreen label="Press" OnPress={this.handleOnPress} />
          </View>
        </SafeAreaProvider>
      </SafeAreaProvider>
    );
  };
}
