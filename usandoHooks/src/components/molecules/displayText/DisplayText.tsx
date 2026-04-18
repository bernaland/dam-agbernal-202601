import { Text, View } from "react-native";
import { stylesDisplay } from "./DisplayText.style";

type DisplayTextProps = {
    value: string;
    historyValue: string;
    showHistory?: boolean;
};

export const DisplayText: React.FC<DisplayTextProps> = ({ value, historyValue, showHistory }) => {
    return (
        <View style={stylesDisplay.container}>
            <View style={stylesDisplay.historyValueContainer}>
                {showHistory && <Text style={stylesDisplay.historyValue}>{historyValue}</Text>}
            </View>
            <View style={stylesDisplay.currentValueContainer}>
                <Text style={stylesDisplay.currentValue}>{value}</Text>
            </View>
        </View>
    );
};