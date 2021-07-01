import React from 'react';
import { View, FlatList } from 'react-native';

import Guild, { GuildProps } from '../../components/Guild';
import ListDivider from '../../components/ListDivider';
ListDivider;

import { styles } from './styles';

type GuildsProps = {
  handleGuildSelected: (guild: GuildProps) => void;
};

const Guilds = ({ handleGuildSelected }: GuildsProps): JSX.Element => {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '2',
      name: 'Focados no CS',
      icon: 'image.png',
      owner: false,
    },
    {
      id: '3',
      name: 'Mulheres em ação',
      icon: 'image.png',
      owner: false,
    },
    {
      id: '4',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '5',
      name: 'Focados no CS',
      icon: 'image.png',
      owner: false,
    },
    {
      id: '6',
      name: 'Mulheres em ação',
      icon: 'image.png',
      owner: false,
    },
  ];

  return (
    <FlatList
      data={guilds}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Guild data={item} onPress={() => handleGuildSelected(item)} />
      )}
      ItemSeparatorComponent={() => <View style={styles.line} />}
      showsVerticalScrollIndicator={false}
      style={styles.guilds}
      contentContainerStyle={{ paddingBottom: 40, paddingTop: 103 }}
      ListHeaderComponent={() => <View style={styles.line} />}
      ListFooterComponent={() => <View style={styles.line} />}
    />
  );
};

export default Guilds;
