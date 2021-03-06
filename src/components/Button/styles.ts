import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { AlignTypes } from "../../helpers/enums";

export const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: theme.colors.line
  },

  buttonTitle: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: AlignTypes.center,
    fontFamily: theme.fonts.text500
  }, 

  icon: {
    width: 24,
    height: 18,
  }
})