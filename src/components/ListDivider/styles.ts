import {  StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  line: {
    borderBottomColor: theme.colors.primaryDark,
    borderBottomWidth: 0.5,
    alignSelf: 'flex-end',
    marginVertical: 10
  }
})