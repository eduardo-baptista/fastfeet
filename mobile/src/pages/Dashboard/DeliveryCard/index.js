import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
  return (
    <Card icon="local-shipping" title={`Encomenda ${data.id}`}>
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
        <TouchableOpacity>
          <FooterDetailsButtonText>Ver Detalhes</FooterDetailsButtonText>
        </TouchableOpacity>
      </Footer>
    </Card>
  );
}

DeliveryCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    statusLevel: PropTypes.number,
    created_at: PropTypes.string,
    recipient: PropTypes.object,
  }).isRequired,
};
