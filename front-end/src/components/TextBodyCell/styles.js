import styled from 'styled-components';

export const Cell = styled.td`
  > div {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
