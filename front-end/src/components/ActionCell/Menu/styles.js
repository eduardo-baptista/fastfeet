import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;

  position: absolute;
  top: calc(50% + 15px);

  min-width: 150px;
  padding: 11px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background-color: #ffffff;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 5px);
    top: -5px;
    width: 10px;
    height: 10px;
    background: #ffffff;
    transform: rotate(45deg);
    box-shadow: -2px -1px 2px 0 rgba(0, 0, 0, 0.1);
  }

  a {
    height: 33px;
    font-size: 16px;
    color: #999999;
    white-space: nowrap;

    display: flex;
    align-items: center;

    & + a {
      border-top: 1px solid #eeeeee;
    }
  }

  svg {
    margin-right: 8px;
  }
`;
