import { View } from "react-native";
import { DisplayText } from "../../molecules";
import { stylesCalculator } from "./CalculatorTemplate.style";
import { KeyPad } from "../../organisms";

type CalculatorTemplateProps = {
    currentValue: string;
    historyValue: string;
    showHistory?: boolean;
    NumberOnHandle: (value: number) => void;
    OperationOnHandle: (operation: string) => void;
};

export const CalculatorTemplate: React.FC<CalculatorTemplateProps> = ({ currentValue, historyValue, showHistory, NumberOnHandle, OperationOnHandle }) => {
    return (
        <View style={stylesCalculator.container}>
            <DisplayText value={currentValue} historyValue={historyValue} showHistory={showHistory} />
            <KeyPad OnPressNumber={NumberOnHandle} OnPressOperation={OperationOnHandle} />
        </View>
    );
};