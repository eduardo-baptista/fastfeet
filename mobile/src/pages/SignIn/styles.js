import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Background = styled.View`
  background: #7d40e7;
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  margin-top: 37.5px;
  padding: 0 20px;
  width: 100%;
  height: 45px;
  font-size: 16px;
  color: #666666;
  background: #ffffff;
  border-radius: 4px;
  border: solid 1px #dddddd;
`;

export const SubmitButton = styled(Button)`
  background: #82bf18;
  margin-top: 15.5px;
`;
