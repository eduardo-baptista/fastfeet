import React, { useState } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import { HalfPurpleBackground as Backgroud } from '~/components/Backgrounds';
import Button from '~/components/Button';
import { TextArea } from './styles';

import api from '~/services/api';

export default function CreateProblem({ navigation, route }) {
  const [value, setValue] = useState('');
  const { id } = route.params;

  async function hnadleSubmit() {
    try {
      await api.post(`delivery/${id}/problems`, {
        description: value,
      });

      Alert.alert('Problema criado com sucesso');
      navigation.navigate('Details');
    } catch (err) {
      Alert.alert(
        'Erro ao informar problema',
        'houve um erro ao tentar informar o problema'
      );
    }
  }

  return (
    <Backgroud>
      <TextArea
        textAlignVertical="top"
        multiline
        placeholder="Inclua aqui o problema de ocorreu na entrega."
        value={value}
        onChangeText={setValue}
      />
      <Button onPress={hnadleSubmit}>Enviar</Button>
    </Backgroud>
  );
}

CreateProblem.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
