import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 6
  },

  content: {
    width: 100,
    height: 116,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingBottom: 20
  },

  contentChecked: {
    borderColor: theme.colors.borderWhite,
    borderWidth: 1,
    margin: 2,
  },
  
  check: {
    position: 'absolute',
    top: 9,
    right: 8,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.line,
    borderRadius: 3,
    borderColor: theme.colors.borderWhite,
    borderWidth: 1
  },

  checked: {
    position: 'absolute',
    top: 9,
    right: 8,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.highlight,
    borderRadius: 3,
    borderColor: theme.colors.borderWhite,
    borderWidth: 1
  },


  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.headingWhite,
    fontSize: 15
  },

})