import { StyleSheet } from "react-native";
import { colors, space } from "../../../Themes";

export const stylesDisplay = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-end",
    padding: space.m,
  },
  currentValue: {
    fontSize: space.xxxl,
  },
  currentValueContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  historyValue: {
    fontSize: space.xl,
  },
  historyValueContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  }
});