import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { AlignTypes } from '../../helpers/enums';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS === 'android' ? 60 : 124 ,
    paddingTop: Platform.OS === 'android' ? 0 : 60,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary
  },

  title: {
    flex: 1,
    textAlign: AlignTypes.left,
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.heading,
    marginLeft: 30
  }
})