import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

import AvatarIMG from '../../assets/ilda.jpeg';

const Avatar = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://github.com/ildaneta.png' }}
        style={styles.image}
      />
    </View>
  );
};

export default Avatar;
