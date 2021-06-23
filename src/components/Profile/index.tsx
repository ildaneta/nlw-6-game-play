import React from 'react';
import { View, Text } from 'react-native';

import Avatar from '../Avatar';

import { styles } from './styles';

const Profile = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Avatar />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>

          <Text style={styles.userName}>Ilda</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
};

export default Profile;
