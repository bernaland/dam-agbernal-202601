import { View } from "react-native";
import { stylesCalculatorPad } from "./CalculatorPad.style";
import { CountScreen } from "../CountScreen/CountScreen";

let count: number = 0;
let currentCount: string = "";
let currentOperation: string = "";

const handleNumberOnPress = (value: number) => {
    currentCount += value.toString();
    console.log(currentCount);
}

const handleCharacterOnPress = (character: string) => {
    if (currentCount.endsWith('.')) {
        currentCount = currentCount.slice(0, -1);
    }
    if (character === '+') {
        count += parseFloat(currentCount);
        currentCount = "";
        console.log(character);
        console.log(`= ${count}`);
    } else if (character === '-') {
        count -= parseFloat(currentCount);
        currentCount = "";
        console.log(character);
        console.log(`= ${count}`);
    }

}

export const CalculatorPad: React.FC = () => {
    return (
        <View style={stylesCalculatorPad.numberPad}>
            <View style={stylesCalculatorPad.container}>
                {Array.from({ length: 3 }, (_, i) => (
                    <CountScreen key={i} label={`${i + 7}`} OnPress={() => handleNumberOnPress(i + 7)} />
                ))}
            </View>
            <View style={stylesCalculatorPad.container}>
                {Array.from({ length: 3 }, (_, i) => (
                    <CountScreen key={i} label={`${i + 4}`} OnPress={() => handleNumberOnPress(i + 4)} />
                ))}
            </View>
            <View style={stylesCalculatorPad.container}>
                {Array.from({ length: 3 }, (_, i) => (
                    <CountScreen key={i} label={`${i + 1}`} OnPress={() => handleNumberOnPress(i + 1)} />
                ))}
            </View>
            <View style={stylesCalculatorPad.container}>
                <CountScreen label="0" OnPress={() => handleNumberOnPress(0)} />
                <CountScreen label="+" OnPress={() => handleCharacterOnPress('+')} />
                <CountScreen label="-" OnPress={() => handleCharacterOnPress('-')} />
            </View>
        </View>
    );
};