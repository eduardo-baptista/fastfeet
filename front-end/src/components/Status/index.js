import styled from 'styled-components';

const statusColors = {
  ENTREGUE: { text: '#2ca42b', background: '#dff0df' },
  PENDENTE: { text: '#c1bc35', background: '#f0f0df' },
  RETIRADA: { text: '#4d85ee', background: '#bad2ff' },
  CANCELADA: { text: '#de3b3b', background: '#fab0b0' },
};

const Status = styled.span`
  height: 27px;
  border-radius: 12px;
  font-weight: bold;
  line-height: 1.36;
  font-size: 14px;
  padding: 4px 10px 4px 22px;
  white-space: nowrap;

  color: ${(props) => statusColors[props.children].text};
  background-color: ${(props) => statusColors[props.children].background};

  position: relative;

  &::before {
    content: ' ';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: calc(50% - 5px);
    left: 6px;
    background-color: ${(props) => statusColors[props.children].text};
  }
`;

export default Status;
