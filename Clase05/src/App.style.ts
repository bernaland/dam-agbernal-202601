import { StyleSheet } from "react-native";
import { colors, space } from "./Themes";

export const appStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    container: {
        height: space.xxxl,
    }
});