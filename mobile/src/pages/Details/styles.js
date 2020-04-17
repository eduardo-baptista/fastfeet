import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import BaseCard from '~/components/Card';

export const Card = styled(BaseCard)`
  margin-bottom: 10px;
`;

export const Info = styled.View`
  margin: 0 14px 15px 14px;
`;

export const InfoTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999999;
`;

export const InfoText = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  color: #666666;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const ActionRow = styled(Row).attrs({
  shadowOffset: { width: 0, height: 0 },
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  shadowOpacity: 3,
  elevation: 1,
})`
  background-color: #f8f9fd;
  border-radius: 4px;
  height: 83px;
`;

export const ActionButton = styled(BaseButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SeparatorActionButton = styled.View`
  width: 1px;
  background-color: #000;
  opacity: 0.1;
`;

export const ActionButtonText = styled.Text`
  font-size: 12px;
  max-width: 60px;
  font-weight: normal;
  color: #999999;
  text-align: center;
`;
