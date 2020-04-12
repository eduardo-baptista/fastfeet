import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  shadowOffset: { width: 0, height: 0 },
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  shadowOpacity: 3,
  elevation: 1,
})`
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
`;

export const TitleContainer = styled.View`
  margin-bottom: 6.5px;
  flex-direction: row;
  align-items: center;
  margin: 15px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 10px;
`;
