import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

import DiscordIMG from '../../assets/discord.png';
import { RectButtonProperties } from 'react-native-gesture-handler';

export interface IButtonIconProps extends RectButtonProperties {
  titleButton: string;
}

const ButtonIcon = ({
  titleButton,
  ...rest
}: IButtonIconProps): JSX.Element => {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordIMG} style={styles.icon} />
      </View>

      <Text style={styles.buttonTitle}>{titleButton}</Text>
    </RectButton>
  );
};

export default ButtonIcon;
