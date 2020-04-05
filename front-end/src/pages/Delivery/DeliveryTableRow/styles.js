import styled from 'styled-components';

export const AvatarItem = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > div,
  > img {
    margin-right: 5px;
  }
`;
