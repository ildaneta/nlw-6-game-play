import {  Platform, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
   
  },

  

  banner: {
    width: '100%',
    height: 234,
    justifyContent: 'flex-end',
    paddingBottom: 24,
    marginBottom: 30
  },

  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    paddingLeft: 24,
    paddingBottom: 10
  },

  subTitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    paddingLeft: 24,
    paddingRight: 24,
  },

  members: {
    marginLeft: 24,
    marginVertical: 24
  },

  footer: {
    paddingHorizontal: 24,
    marginVertical: Platform.OS === 'android' ? 15 : 25
  }
})