import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

export type AvatarProps = {
  urlImage: string;
};

const Avatar = ({ urlImage }: AvatarProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: urlImage }} style={styles.image} />
    </View>
  );
};

export default Avatar;
