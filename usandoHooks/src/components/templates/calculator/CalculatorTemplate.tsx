import { View } from "react-native";
import { DisplayText } from "../../molecules";
import { stylesCalculator } from "./CalculatorTemplate.style";
import { KeyPad } from "../../organisms";

type CalculatorTemplateProps = {
    currentValue: string;
    historyValue: string;
    NumberOnHandle: (value: number) => void;
    OperationOnHandle: (operation: string) => void;
};

export const CalculatorTemplate: React.FC<CalculatorTemplateProps> = ({ currentValue, historyValue, NumberOnHandle, OperationOnHandle }) => {
    return (
        <View style={stylesCalculator.container}>
            <View>
                <DisplayText value={currentValue} historyValue={historyValue} />
            </View>
            <View>
                <KeyPad OnPressNumber={NumberOnHandle} OnPressOperation={OperationOnHandle} />
            </View>
        </View>
    );
};