import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

import DiscordIMG from '../../assets/discord.png';

export interface IButtonIconProps extends TouchableOpacityProps {
  titleButton: string;
}

const ButtonIcon = ({
  titleButton,
  ...rest
}: IButtonIconProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordIMG} style={styles.icon} />
      </View>

      <Text style={styles.buttonTitle}>{titleButton}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
