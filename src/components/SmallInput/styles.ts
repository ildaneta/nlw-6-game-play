import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { AlignTypes } from "../../helpers/enums";


export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.primary,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    textAlign: AlignTypes.center,
    borderColor: theme.colors.line,
    borderWidth: 1
  }
})