import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import {
  BorderlessButton,
  BorderlessButtonProperties,
} from 'react-native-gesture-handler';
import { Entypo, Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface IHeaderProps extends BorderlessButtonProperties {
  title: string;
  hasIconShare?: boolean;
  onPressShare?: () => void;
}

const Header = ({
  title,
  onPressShare,
  hasIconShare,
  ...rest
}: IHeaderProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <BorderlessButton {...rest}>
        <Feather
          name={'arrow-left'}
          size={24}
          color={theme.colors.headingWhite}
        />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {hasIconShare && (
        <BorderlessButton onPress={onPressShare}>
          <Entypo name="share" size={24} color={theme.colors.secondary} />
        </BorderlessButton>
      )}
    </View>
  );
};

export default Header;
