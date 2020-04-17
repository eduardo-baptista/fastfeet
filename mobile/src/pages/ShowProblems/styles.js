import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin-bottom: 12.5px;
`;
export const Problem = styled.View.attrs({
  shadowOffset: { width: 0, height: 0 },
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  shadowOpacity: 3,
  elevation: 1,
})`
  height: 55.4px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 15.6px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ProblemText = styled.Text`
  font-size: 16px;
  font-weight: normal;
  color: #999999;
  margin: 0 19px;

  flex: 11;
`;

export const ProblemDate = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
  margin-right: 11px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 1 },
})``;
