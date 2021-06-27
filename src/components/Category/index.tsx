import React from 'react';
import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import { styles } from './styles';

interface ICategoryProps extends RectButtonProperties {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
}

const Category = ({
  title,
  icon: Icon,
  checked = true,
  hasCheckBox = false,
  ...rest
}: ICategoryProps): JSX.Element => {
  return (
    <RectButton {...rest} style={styles.container}>
      <View
        style={[
          styles.content,
          { opacity: checked ? 1 : 0.4 },
          checked ? styles.contentChecked : styles.content,
        ]}>
        {hasCheckBox && (
          <View style={checked ? styles.checked : styles.check} />
        )}

        <Icon width={48} height={48} />

        <Text style={styles.title}>{title}</Text>
      </View>
    </RectButton>
  );
};

export default Category;
