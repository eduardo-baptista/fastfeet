import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;

  width: 100%;
  height: 100%;
  border: none;

  position: relative;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 50%;
  z-index: 10;

  width: 150px;
  padding: 11px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
`;
