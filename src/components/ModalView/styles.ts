
import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    marginTop: Platform.OS === 'ios' ? 160 : 100
  },

  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },

  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.borderWhite,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 103
  }
});