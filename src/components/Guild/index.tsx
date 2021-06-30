import React from 'react';
import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';

import GuildIcon from '../GuildIcon';

import { styles } from './styles';

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

interface GuildData extends TouchableOpacityProps {
  data: GuildProps;
}

const Guild = ({ data, ...rest }: GuildData): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Guild;
