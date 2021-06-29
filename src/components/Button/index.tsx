import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import { styles } from './styles';

import { RectButtonProperties } from 'react-native-gesture-handler';

export interface IButtonProps extends RectButtonProperties {
  titleButton: string;
}

const Button = ({ titleButton, ...rest }: IButtonProps): JSX.Element => {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.buttonTitle}>{titleButton}</Text>
    </RectButton>
  );
};

export default Button;
