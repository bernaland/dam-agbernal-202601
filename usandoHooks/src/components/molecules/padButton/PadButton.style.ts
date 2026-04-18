import { StyleSheet } from "react-native";
import { colors, space } from "../../../Themes";

export const padButtonStyles = StyleSheet.create({
  labelText: {
    color: colors.white,
    fontSize: space.xl,
  },
  button: {
    backgroundColor: colors.primary[900],
    padding: space.s,
    borderRadius: space.s,
    margin: space.xs,
    width: 60,
    height: 60,
  },
});