import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 15px;

  label {
    color: #444444;
    line-height: 1.36;
    font-weight: bold;
    width: 100%;
    display: block;
    margin-bottom: 9px;
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 4px;
    border: solid 1px #dddddd;
    padding: 0 15px;
    color: #666666;
    font-size: 16px;

    transition: 0.2s ease-in;

    &::placeholder {
      color: #999999;
    }

    &:focus {
      border-color: #7d40e7;
    }

    ${(props) =>
      props.error &&
      css`
        border-color: #de3b3b;
      `}
  }
`;

export const Error = styled.span`
  color: #de3b3b;
  display: block;
  margin-top: 5px;
`;
