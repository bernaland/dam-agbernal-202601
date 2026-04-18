import { View } from "react-native";
import { stylesKeyPad } from "./KeyPad.style";
import { DisplayText, PadButton } from "../../molecules";

type KeyPadProps = {
    OnPressNumber: (value: number) => void; 
    OnPressOperation: (operation: string) => void;
};

export const KeyPad: React.FC<KeyPadProps> = ({OnPressNumber, OnPressOperation}) => {
    return (
        <View style={stylesKeyPad.container}>
            <DisplayText value="0" historyValue="" />
            <View style={stylesKeyPad.buttonRow}>
                <PadButton label="C" OnPress={() => OnPressOperation("C")} />
                <PadButton label="±" OnPress={() => OnPressOperation("±")} />
                <PadButton label="%" OnPress={() => OnPressOperation("%")} />
                <PadButton label="÷" OnPress={() => OnPressOperation("÷")} />
            </View>
            <View style={stylesKeyPad.buttonRow}>
                <PadButton label="7" OnPress={() => OnPressNumber(7)} />
                <PadButton label="8" OnPress={() => OnPressNumber(8)} />
                <PadButton label="9" OnPress={() => OnPressNumber(9)} />
                <PadButton label="×" OnPress={() => OnPressOperation("×")} /> 
            </View>
            <View style={stylesKeyPad.buttonRow}>
                <PadButton label="4" OnPress={() => OnPressNumber(4)} />
                <PadButton label="5" OnPress={() => OnPressNumber(5)} />
                <PadButton label="6" OnPress={() => OnPressNumber(6)} />
                <PadButton label="-" OnPress={() => OnPressOperation("-")} />
            </View>
            <View style={stylesKeyPad.buttonRow}>
                <PadButton label="1" OnPress={() => OnPressNumber(1)} />
                <PadButton label="2" OnPress={() => OnPressNumber(2)} />
                <PadButton label="3" OnPress={() => OnPressNumber(3)} />
                <PadButton label="+" OnPress={() => OnPressOperation("+")} />
            </View>
            <View style={stylesKeyPad.buttonRow}>
                <PadButton label="0" OnPress={() => OnPressNumber(0)} />
                <PadButton label="." OnPress={() => OnPressOperation(".")} />
                <PadButton label="=" OnPress={() => OnPressOperation("=")} />
            </View>
        </View>
    );
};