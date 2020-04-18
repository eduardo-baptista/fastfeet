import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import { HalfPurpleBackground } from '~/components/Backgrounds';
import { CameraWrapper, Camera, CameraButton, Preview } from './styles';

import api from '~/services/api';

import Button from '~/components/Button';

export default function ConfirmDelivery({ route }) {
  const [camera, setCamera] = useState(null);
  const [file, setFile] = useState(null);
  const { id } = route.params;

  async function handleTakePicture() {
    if (!camera) return;
    const data = await camera.takePictureAsync();
    setFile(data);
  }

  async function handleSubmit() {
    try {
      if (!file) {
        Alert.alert('Erro ao confirmar entrega', 'A imagem é obrigatória');
        return;
      }
      const dataFile = new FormData();
      dataFile.append('file', {
        type: 'image/jpg',
        uri: file.uri,
        name: 'signature.jpg',
      });

      const response = await api.post('files', dataFile);
      await api.post('deliveries/end', {
        delivery_id: id,
        signature_id: response.data.id,
      });

      Alert.alert(
        'Entrega confirmada',
        'A entrega foi confirmada com sucesso!'
      );
    } catch (err) {
      Alert.alert(
        'Erro ao confirmar entrega',
        'Não foi possivel confirmar a entrega'
      );
    }
  }

  return (
    <HalfPurpleBackground>
      {file ? (
        <CameraWrapper>
          <Preview source={{ uri: file.uri }} />
          <CameraButton onPress={() => setFile(null)}>
            <Icon name="close" size={24} color="#fff" />
          </CameraButton>
        </CameraWrapper>
      ) : (
        <CameraWrapper>
          <Camera
            captureAudio={false}
            ref={(ref) => setCamera(ref)}
            autoFocus="on"
          />
          <CameraButton onPress={handleTakePicture}>
            <Icon name="camera-alt" size={24} color="#fff" />
          </CameraButton>
        </CameraWrapper>
      )}
      <Button onPress={handleSubmit}>Enviar</Button>
    </HalfPurpleBackground>
  );
}

ConfirmDelivery.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
