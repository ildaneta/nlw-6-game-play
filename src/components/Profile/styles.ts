import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  user: {
    flexDirection: 'row'
  },

  userName: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading
  },

  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },

  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading
  }
})