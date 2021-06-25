import { Platform, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },

  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'android' ? 26 : 66,
    marginBottom: 42
  },

  content: {
    marginTop: 40,
  },

  matches: {
    marginLeft: 24,
    marginTop: 24,
  }
})