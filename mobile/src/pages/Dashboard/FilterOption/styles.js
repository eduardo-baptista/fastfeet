import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity)`
  margin-left: 15px;
  border-bottom-color: #7d40e7;
  border-bottom-width: ${(props) => (props.isActive ? '1px' : 0)};
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #999999;
  color: ${(props) => (props.isActive ? '#7d40e7' : '#999999')};
`;
