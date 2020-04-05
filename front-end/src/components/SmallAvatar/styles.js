import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 35px;
  height: 35px;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 50%;

  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.color};
  background-color: ${(props) => lighten(0.65, props.color)};
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
`;
