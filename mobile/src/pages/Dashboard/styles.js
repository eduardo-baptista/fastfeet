import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  padding: 25px 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22.5px;
`;

export const HeaderInfo = styled.View`
  flex: 1;
  padding: 0 12px;
`;

export const HeaderText = styled.Text`
  color: #666666;
  font-size: 12px;
`;

export const HeaderName = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const ListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10.5px;
`;

export const Title = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const Filter = styled.View`
  flex-direction: row;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 1 },
})``;
