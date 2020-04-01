import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 0 10px;
  width: 237px;
  height: 36px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
  border-radius: 4px;

  input {
    height: 100%;
    border: none;
    color: #666666;
    margin-left: 8px;

    &::placeholder {
      color: #999999;
    }
  }
`;
