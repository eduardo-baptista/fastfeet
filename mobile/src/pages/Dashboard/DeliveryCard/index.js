import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import {
  TimeLine,
  Card,
  Step,
  StepText,
  StepIndicator,
  Line,
  Footer,
  FooterInfo,
  FooterInfoTitle,
  FooterInfoText,
  FooterDetailsButtonText,
} from './styles';

export default function DeliveryCard({ data }) {
  const navigation = useNavigation();

  function goToDetails() {
    navigation.navigate('Details', {
      id: data.id,
    });
  }

  return (
    <Card icon="local-shipping" title={`Encomenda ${data.formatedId}`}>
      <TimeLine>
        <Line />
        <Step>
          <StepIndicator done={data.statusLevel >= 0} />
          <StepText>Aguardando Retirada</StepText>
        </Step>
        <Step>
          <StepIndicator done={data.statusLevel >= 1} />
          <StepText>Retirada</StepText>
        </Step>
        <Step>
          <StepIndicator done={data.statusLevel >= 2} />
          <StepText>Entregue</StepText>
        </Step>
      </TimeLine>
      <Footer>
        <FooterInfo>
          <FooterInfoTitle>Data</FooterInfoTitle>
          <FooterInfoText>{data.created_at}</FooterInfoText>
        </FooterInfo>
        <FooterInfo>
          <FooterInfoTitle>Cidade</FooterInfoTitle>
          <FooterInfoText>{data.recipient.city}</FooterInfoText>
        </FooterInfo>
        <TouchableOpacity onPress={goToDetails}>
          <FooterDetailsButtonText>Ver Detalhes</FooterDetailsButtonText>
        </TouchableOpacity>
      </Footer>
    </Card>
  );
}

DeliveryCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    formatedId: PropTypes.string,
    statusLevel: PropTypes.number,
    created_at: PropTypes.string,
    recipient: PropTypes.object,
  }).isRequired,
};
