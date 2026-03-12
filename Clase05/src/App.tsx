import React from 'react';
import { View } from 'react-native';
import { CalculatorPad, CountScreen } from './components';
import { appStyles } from './App.style';

type AppProps = {
  attribute: string;
};
let count: number = 0;

const handleOnPress = (value: number) => {
  console.log('Button pressed!');
  count += value;
  console.log(`Current count: ${count}`);
};

export class App extends React.Component<AppProps> {

  render() {
    console.log('Rendering App component');
    const label = "Hello world!";
    const name = "Hello world! x2";
    return (
      <View style={appStyles.safeArea}>
        <View style={appStyles.container}>
          <CalculatorPad />
        </View>
      </View>
    );
  };
}
