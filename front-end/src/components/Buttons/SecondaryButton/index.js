import styled from 'styled-components';
import { darken } from 'polished';
import DefaultButton from '~/components/Buttons/DefaultButton';

export default styled(DefaultButton)`
  height: 36px;
  background-color: #cccccc;
  padding: 0 16px;
  vertical-align: baseline;
  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: ${darken(0.2, '#cccccc')};
  }
`;
