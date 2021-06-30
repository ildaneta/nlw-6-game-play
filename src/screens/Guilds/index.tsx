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
  ];

  return (
    <View>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
        ItemSeparatorComponent={() => <View style={styles.line} />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
};

export default Guilds;
