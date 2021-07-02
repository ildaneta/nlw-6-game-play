import React from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

import ButtonIcon from '../../components/ButtonIcon';

import IllustationIMG from '../../assets/illustration.png';
import { theme } from '../../global/styles/theme';

const SignIn = (): JSX.Element => {
  const { signIn, isLoading } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={IllustationIMG} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}e organize suas{'\n'}jogatinas
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
        </Text>

        {isLoading ? (
          <ActivityIndicator color={theme.colors.secondary} />
        ) : (
          <ButtonIcon titleButton="Entrar com Discord" onPress={handleSignIn} />
        )}
      </View>
    </View>
  );
};

export default SignIn;
