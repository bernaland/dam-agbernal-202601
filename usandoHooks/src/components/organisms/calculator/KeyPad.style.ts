import { StyleSheet } from "react-native";
import { colors, space } from "../../../Themes";

export const stylesKeyPad = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: space.m,
  },
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-end",
    padding: space.m,
  }
});