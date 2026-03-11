import { StyleSheet } from "react-native";
import { colors, space } from "../../../Themes";

export const stylesCountScreen = StyleSheet.create({
  labelText: {
    color: colors.white,
    fontSize: space.xl,
  },
  button: {
    backgroundColor: colors.primary[900],
    padding: space.xxl,
    borderRadius: space.s,
  },
});