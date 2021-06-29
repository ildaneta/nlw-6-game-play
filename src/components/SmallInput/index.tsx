import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

const SmallInput = ({ ...rest }: TextInputProps): JSX.Element => {
  return (
    <TextInput {...rest} style={styles.container} keyboardType="numeric" />
  );
};

export default SmallInput;
