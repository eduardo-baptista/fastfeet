import styled from 'styled-components/native';
import BaseAvatar from '~/components/Avatar';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 35px;
  align-items: center;
`;

export const Avatar = styled(BaseAvatar).attrs({
  size: 137,
  fontSize: 60,
})`
  margin-bottom: 40px;
  margin-top: 70px;
`;

export const Info = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;
export const InfoTitle = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const InfoText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const LogoutButton = styled(Button)`
  margin-top: 15px;
  background: #e74040;
`;
