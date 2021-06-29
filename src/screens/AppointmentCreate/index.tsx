import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import CategorySelect from '../../components/CategorySelect';
import GuildIcon from '../../components/GuildIcon';
import SmallInput from '../../components/SmallInput';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

const AppointmentCreate = (): JSX.Element => {
  const navigation = useNavigation();

  const [category, setCategory] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.container}>
          <Header title="Agendar partida" onPress={() => navigation.goBack()} />

          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}>
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            categorySelected={category}
            setCategory={setCategory}
          />

          <View style={styles.form}>
            <RectButton>
              <View style={styles.select}>
                {
                  <GuildIcon />
                  // <View style={styles.image} />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>Selecione um Servidor</Text>
                </View>

                <Feather
                  name="chevron-right"
                  size={18}
                  color={theme.colors.headingWhite}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>

              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              textAlign="center"
            />

            <View style={styles.footer}>
              <Button titleButton="Agendar" />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AppointmentCreate;
