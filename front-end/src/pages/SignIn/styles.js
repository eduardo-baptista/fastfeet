import styled from 'styled-components';
import { darken } from 'polished';
import { DefaultButton } from '~/components/Buttons';

export const Logo = styled.img`
  margin: 30px 0 40px;
`;

export const SigninButton = styled(DefaultButton)`
  width: 100%;
  height: 45px;
  background-color: #7d40e7;
  font-size: 16px;
  margin-bottom: 30px;

  &:hover {
    background-color: ${darken(0.2, '#7d40e7')};
  }
`;
