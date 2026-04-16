import { Pressable, Text } from "react-native";
import { padButtonStyles } from "./PadButton.style";

type PadButtonProps = {
    label: string;
    OnPress: () => void;
};

export const PadButton: React.FC<PadButtonProps> = ({ label, OnPress }) => {
    return (
        <Pressable style={padButtonStyles.button} onPress={OnPress}>
            <Text style={padButtonStyles.labelText}>{label}</Text>
        </Pressable>
    );
};
