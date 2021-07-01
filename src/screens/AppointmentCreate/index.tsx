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
import Guilds from '../Guilds';

import ModalView from '../../components/ModalView';
import Header from '../../components/Header';
import CategorySelect from '../../components/CategorySelect';
import GuildIcon from '../../components/GuildIcon';
import SmallInput from '../../components/SmallInput';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { GuildProps } from '../../components/Guild';

const AppointmentCreate = (): JSX.Element => {
  const navigation = useNavigation();

  const [category, setCategory] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [guildSelected, setGuildSelected] = useState<GuildProps>(
    {} as GuildProps,
  );

  const handleOpenGuilds = () => setModalVisible(true);

  const handleCloseModal = () => setModalVisible(false);

  const handleGuildSelected = (guildSelect: GuildProps) => {
    setGuildSelected(guildSelect);
    setModalVisible(false);
  };

  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === category) {
      setCategory('');
    } else {
      setCategory(categoryId);
    }
  };

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
            setCategory={handleCategorySelect}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guildSelected.icon ? (
                  <GuildIcon />
                ) : (
                  <View style={styles.image} />
                )}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guildSelected.name
                      ? guildSelected.name
                      : 'Selecione um servidor'}
                  </Text>
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

              <Text style={styles.caracteresLimit}>Max 200 caracteres</Text>
            </View>

            <TextArea
              multiline
              maxLength={200}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button titleButton="Agendar" />
            </View>
          </View>
        </View>
      </ScrollView>
      <ModalView visible={isModalVisible} closeModal={handleCloseModal}>
        <Guilds handleGuildSelected={handleGuildSelected} />
      </ModalView>
    </KeyboardAvoidingView>
  );
};

export default AppointmentCreate;
