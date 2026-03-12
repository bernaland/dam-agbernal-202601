import { StyleSheet } from "react-native";
import { colors, space } from "../../../Themes";

export const stylesCalculatorPad = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: space.m,
  },
  numberPad: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    padding: space.m,
  }
});