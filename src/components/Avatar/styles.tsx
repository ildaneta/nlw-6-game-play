import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22,
    borderColor: theme.colors.line,
    borderWidth: 1,
    borderRadius: 8,
  },

  image: {
    width: 48.5,
    height: 48.5,
    borderRadius: 8,
  },
});
