import styled from 'styled-components/native';
import BaseCard from '~/components/Card';

export const Card = styled(BaseCard)`
  margin-bottom: 30px;
`;

export const TimeLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 40px 30px 40px;
  position: relative;
`;

export const Line = styled.View`
  position: absolute;
  height: 1px;
  width: 100%;
  background-color: #7d40e7;
  top: 4px;
`;

export const Step = styled.View`
  align-items: center;
  position: relative;
  height: 30px;
`;

export const StepText = styled.Text`
  width: 44px;
  color: #999999;
  font-size: 8px;
  text-align: center;
  top: 15px;
  position: absolute;
`;

export const StepIndicator = styled.View`
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  border: solid 1px #7d40e7;
  background-color: ${(props) => (props.done ? '#7d40e7' : '#ffffff')};
  margin-bottom: 6px;
`;

export const Footer = styled.View`
  height: 64px;
  background-color: #f8f9fd;
  flex-direction: row;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
`;

export const FooterInfo = styled.View``;
export const FooterInfoTitle = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #999999;
`;
export const FooterInfoText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444444;
`;
export const FooterDetailsButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
`;
