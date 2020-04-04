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
  .react-select__control {
    width: 100%;
    height: 45px;
    border-radius: 4px;
    border: solid 1px #dddddd;
    padding: 0 5px 0 15px;
    font-size: 16px;

    &:hover {
      border-color: #dddddd;
    }
    ${(props) =>
      props.error &&
      css`
        border-color: #de3b3b;
      `}
  }

  .react-select__placeholder {
    color: #999999;
  }

  .react-select__input {
    color: #666666;
  }
  .react-select__single-value {
    color: #666666;
  }

  .react-select__value-container {
    padding: 0;
  }
  .react-select__indicator-separator {
    background: none;
  }

  .react-select__control--is-focused {
    box-shadow: none;
    border-color: #7d40e7;

    &:hover {
      border-color: #7d40e7;
    }
  }
`;

export const Error = styled.span`
  color: #de3b3b;
  display: block;
  margin-top: 5px;
`;
