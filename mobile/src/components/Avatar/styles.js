import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f4effc;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #a28fd0;
  font-size: 31px;
`;
