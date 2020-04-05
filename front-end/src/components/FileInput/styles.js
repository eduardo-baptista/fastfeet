import styled from 'styled-components';

export const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Container = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 25px;

  background: #ffffff;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }
`;

export const InputLabel = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  color: #dddddd;
  border: 2px dashed #ddd;
  font-size: 16px;
  font-weight: bold;
  transition: 0.1s ease-in;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    border-color: #a28fd0;
    color: #a28fd0;
  }
`;
