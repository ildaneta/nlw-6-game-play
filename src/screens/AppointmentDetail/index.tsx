import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';

import Header from '../../components/Header';
import ListHeader from '../../components/ListHeader';
import Member from '../../components/Member';
import ButtonIcon from '../../components/ButtonIcon';

import BannerIMG from '../../assets/banner.png';

import { styles } from './styles';
import ListDivider from '../../components/ListDivider';

const AppointmentDetail = (): JSX.Element => {
  const navigation = useNavigation();

  const members = [
    {
      id: '1',
      username: 'Ilda',
      avatarUrl: 'https://github.com/ildaneta.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Neta',
      avatarUrl: 'https://github.com/ildaneta.png',
      status: 'offline',
    },
    {
      id: '3',
      username: 'Silva',
      avatarUrl: 'https://github.com/ildaneta.png',
      status: 'offline',
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Detalhes"
        onPress={() => navigation.goBack()}
        hasIconShare
        onPressShare={() => {}}
      />

      <ScrollView>
        <ImageBackground source={BannerIMG} style={styles.banner}>
          <Text style={styles.title}>Lendários</Text>

          <Text style={styles.subTitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida
          </Text>
        </ImageBackground>

        <ListHeader title="Jogadores" subtitle="Total 13" />

        <FlatList
          keyExtractor={item => item.id}
          data={members}
          renderItem={({ item }) => <Member data={item} />}
          ItemSeparatorComponent={() => (
            <ListDivider marginTop={10} width={'81.5%'} />
          )}
          style={styles.members}
        />
      </ScrollView>
      <View style={styles.footer}>
        <ButtonIcon titleButton="Entrar na partida" />
      </View>
    </View>
  );
};

export default AppointmentDetail;
