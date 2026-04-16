import { Text, View } from "react-native";

type DisplayTextProps = {
    value: string;
    historyValue: string;
};

export const DisplayText: React.FC<DisplayTextProps> = ({ value, historyValue }) => {
    return (
        <View>
            <Text>{historyValue}</Text>
            <Text>{value}</Text>
        </View>
    );
};