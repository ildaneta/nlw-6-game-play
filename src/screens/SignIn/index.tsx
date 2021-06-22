import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import { styles } from './styles';

import ButtonIcon from '../../components/ButtonIcon';

import IllustationIMG from '../../assets/illustration.png';
import { theme } from '../../global/styles/theme';

const SignIn = (): JSX.Element => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <View style={styles.container}>
        <Image source={IllustationIMG} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}e organize suas{'\n'}jogatinas
          </Text>

          <Text style={styles.subTitle}>
            Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
          </Text>

          <ButtonIcon titleButton="Entrar com Discord" activeOpacity={0.9} />
        </View>
      </View>
    </>
  );
};

export default SignIn;
