import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  border: ${(props) => props.size * 0.1}px solid #fff;
  border-color: ${(props) => props.color || '#fff'} transparent
    ${(props) => props.color || '#fff'} transparent;
  animation: ${loaderAnimation} 1.2s linear infinite;
`;
