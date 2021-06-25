import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 33,
   
  },

  content: {
    flex: 1,
    borderBottomColor: theme.colors.primaryDark,
    borderBottomWidth: 0.5,
    paddingBottom: 12
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },

  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18
  },

  category: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 13,
    marginRight: 24
  },

  playersInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  footer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dateInfo: {
    flexDirection: 'row',
    width: '100%',
  },

  date: {
    marginLeft: 7,
    color: theme.colors.headingWhite,
    fontFamily: theme.fonts.text500,
    fontSize: 13
  },

  player: {
    marginLeft: 7,
    color: theme.colors.secondary,
    fontFamily: theme.fonts.text500,
    fontSize: 13,
  }
})