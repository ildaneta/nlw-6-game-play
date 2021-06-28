import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type ListDividerProps = {
  marginTop?: number;
  width?: string;
};

const ListDivider = ({ marginTop, width }: ListDividerProps): JSX.Element => {
  return (
    <View
      style={[
        styles.line,
        marginTop ? { marginTop: marginTop } : {},
        width ? { width: width } : {},
      ]}
    />
  );
};

export default ListDivider;
