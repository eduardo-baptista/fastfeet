import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  color: #666666;
  width: 100%;
  padding-bottom: 12px;

  & ~ div {
    border-top: 1px solid #eeeeee;
    padding-top: 8px;
  }

  span {
    font-size: 16px;
    line-height: 1.38;
  }

  strong {
    margin-right: 5px;
  }

  img {
    width: 100%;
    max-width: 234px;
    margin: 0 auto;
  }
`;

export const Title = styled.h4`
  color: #444444;
  font-weight: bold;
  margin-bottom: 4px;
`;
