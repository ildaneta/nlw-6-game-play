import React from 'react';
import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import GuildIcon from '../GuildIcon';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

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
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.type}>
          {data.owner ? 'Administrador' : 'Convidado'}
        </Text>
      </View>

      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </TouchableOpacity>
  );
};

export default Guild;
