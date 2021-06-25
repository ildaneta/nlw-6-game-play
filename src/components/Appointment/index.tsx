import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';
import { GuildProps } from '../Guild';

import GuildIcon from '../../components/GuildIcon';
import PlayerSVG from '../../assets/player.svg';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

interface IAppointmentData extends RectButtonProps {
  data: AppointmentProps;
}

const Appointment = ({ data, ...rest }: IAppointmentData): JSX.Element => {
  const [category] = categories.filter(item => item.id === data.category);

  const { owner, name } = data.guild;
  const { secondary, on } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>

            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={18}
                color={theme.colors.secondary}
              />

              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSVG fill={owner ? secondary : on} />

              <Text style={[styles.player, { color: owner ? secondary : on }]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
};

export default Appointment;
