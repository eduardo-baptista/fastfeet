import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-column-gap: ${(props) => props.gap || '30px'};
  grid-template-columns: ${(props) => props.template};
`;
