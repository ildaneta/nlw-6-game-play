import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';\

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

const Guild = (): JSX.Element => {
  return <View />;
};

export default Guild;
