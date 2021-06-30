import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 24
  },

  guilds: {
    width: '100%',
  },

  line: {
    borderColor: theme.colors.highlight,
    borderWidth: 0.5,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 108
  }
});