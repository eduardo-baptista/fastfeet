import styled from 'styled-components/native';

export const TextArea = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  padding: 20px;
  width: 100%;
  height: 300px;
  font-size: 16px;
  color: #666666;
  background: #ffffff;
  border-radius: 4px;
  border: solid 1px #dddddd;

  margin-bottom: 20px;
`;
