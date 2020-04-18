import React, { useState, useEffect } from 'react';
import { StatusBar, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Card,
  Info,
  InfoText,
  InfoTitle,
  Row,
  ActionRow,
  ActionButton,
  ActionButtonText,
  SeparatorActionButton,
} from './styles';
import { HalfPurpleBackground as Background } from '~/components/Backgrounds';

import api from '~/services/api';

import formatDelivery from '~/utils/formatDelivery';

export default function Details({ route, navigation }) {
  const { id } = route.params;
  const [loading, setLoading] = useState(true);
  const [delivery, setDelivery] = useState({});

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data } = await api.get(`orders/${id}`);

      setDelivery(formatDelivery(data));

      setLoading(false);
    }
    fetchData();
  }, [id]);

  function handleConfirmDelivery() {
    if (!delivery.start_date) {
      Alert.alert(
        'Encomenda não retirada',
        'A encomenda ainda não foi retirada pelo entregador'
      );
      return;
    }

    if (delivery.end_date) {
      Alert.alert(
        'Encomenda encerrada',
        `A encomenda foi entregue em ${delivery.end_date}`
      );
      return;
    }

    navigation.navigate('ConfirmDelivery', { id });
  }

  return (
    <>
      <StatusBar backgroundColor="#7d40e7" barStyle="light-content" />
      <Background>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <>
            <Card icon="local-shipping" title="Informações da entrega">
              <Info>
                <InfoTitle>DESTINATÁRIO</InfoTitle>
                <InfoText>{delivery.recipient?.name}</InfoText>
              </Info>
              <Info>
                <InfoTitle>ENDEREÇO DE ENTREGA</InfoTitle>
                <InfoText>{delivery.address}</InfoText>
              </Info>
              <Info>
                <InfoTitle>PRODUTO</InfoTitle>
                <InfoText>{delivery.product}</InfoText>
              </Info>
            </Card>
            <Card icon="event" title="Situação da entrega">
              <Info>
                <InfoTitle>STATUS</InfoTitle>
                <InfoText>{delivery.status}</InfoText>
              </Info>
              <Row>
                <Info>
                  <InfoTitle>DATA DE RETIRADA</InfoTitle>
                  <InfoText>{delivery.start_date || '-- / -- / --'}</InfoText>
                </Info>
                <Info>
                  <InfoTitle>DATA DE ENTREGA</InfoTitle>
                  <InfoText>{delivery.end_date || '-- / -- / --'}</InfoText>
                </Info>
              </Row>
            </Card>
            <ActionRow>
              <ActionButton
                onPress={() => navigation.navigate('CreateProblem', { id })}
              >
                <Icon name="highlight-off" size={24} color="#e74040" />
                <ActionButtonText>Informar Problema</ActionButtonText>
              </ActionButton>
              <SeparatorActionButton />
              <ActionButton
                onPress={() => navigation.navigate('ShowProblems', { id })}
              >
                <Icon name="info-outline" size={24} color="#e7ba40" />
                <ActionButtonText>Visualizar Problemas</ActionButtonText>
              </ActionButton>
              <SeparatorActionButton />
              <ActionButton onPress={handleConfirmDelivery}>
                <Icon name="check-circle" size={24} color="#7d40e7" />
                <ActionButtonText>Confirmar Entrega</ActionButtonText>
              </ActionButton>
            </ActionRow>
          </>
        )}
      </Background>
    </>
  );
}

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
