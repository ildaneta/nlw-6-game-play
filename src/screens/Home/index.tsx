import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListHeader from '../../components/ListHeader';
import Appointment from '../../components/Appointment';

const Home = (): JSX.Element => {
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos jogar até o dia amanhacer',
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Gigantes do CS',
        icon: null,
        owner: false,
      },
      category: '2',
      date: '27/06 às 10:30h',
      description: 'É hoje que vamos jogar até o dia amanhacer',
    },
  ];

  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === category) {
      setCategory('');
    } else {
      setCategory(categoryId);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />

        <ButtonAdd onPress={() => navigation.navigate('AppointmentCreate')} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total de 6" />
      </View>

      <FlatList
        style={styles.matches}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Appointment
            data={item}
            onPress={() => navigation.navigate('AppointmentDetail')}
          />
        )}
      />
    </View>
  );
};

export default Home;
