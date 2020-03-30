import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #7d40e7;
  width: 100%;
  min-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
