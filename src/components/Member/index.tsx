import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../global/styles/theme';

import Avatar from '../Avatar';

import { styles } from './styles';

export type MemberData = {
  id: string;
  username: string;
  avatarUrl: string;
  status: string;
};

type MemberProps = {
  data: MemberData;
};

const Member = ({ data }: MemberProps): JSX.Element => {
  const isOnline = data.status === 'online';

  const { on, off } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatarUrl} />

      <View>
        <Text style={styles.title}>{data.username}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? on : off,
              },
            ]}
          />

          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Member;
