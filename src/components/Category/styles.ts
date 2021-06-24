import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8
  },

  content: {
    width: 100,
    height: 116,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10
  },

  contentChecked: {
    borderColor: theme.colors.borderWhite,
    borderWidth: 1,
    margin: 2,
  },
  
  check: {
    width: 13,
    height: 13,
    backgroundColor: theme.colors.line,
    alignSelf: 'flex-end',
    marginRight: 10,
    borderRadius: 3,
    borderColor: theme.colors.borderWhite,
    borderWidth: 1
  },

  checked: {
    width: 13,
    height: 13,
    backgroundColor: theme.colors.highlight,
    alignSelf: 'flex-end',
    marginRight: 10,
    borderRadius: 3,
    borderColor: theme.colors.borderWhite,
    borderWidth: 1
  },


  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.headingWhite,
    fontSize: 15
  }
})