import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";
import { AlignTypes } from "../../helpers/enums";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  
  image: {
    width: '100%',
    height: 360
  },
  
  content: {
    marginTop: -40,
    marginHorizontal: 24
  },

  title: {
    color: theme.colors.heading,
    textAlign: AlignTypes.center,
    fontSize: 40,
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },

  subTitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: AlignTypes.center,
    marginBottom: 44,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  }
})