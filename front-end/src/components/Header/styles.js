import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 64px;
  border: 1px solid #dddddd;

  position: fixed;
  top: 0;
  left: 0;

  padding: 0 30px;

  display: flex;
  align-items: center;

  /* logo */
  svg {
    width: 135px;
    flex-shrink: 0;
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    line-height: 1.36;

    strong {
      font-weight: strong;
      color: #666666;
    }

    button {
      background: none;
      border: none;
      color: #de3b3b;
      cursor: pointer;
    }
  }
`;

export const Separator = styled.div`
  background-color: #dddddd;
  width: 1px;
  height: 32px;
  flex-shrink: 0;

  margin: 0 30px;
`;

export const Links = styled.ul`
  flex: 1;
  display: flex;

  ul {
    margin-right: 20px;
  }
`;

export const NavLink = styled(Link).attrs({
  activeStyle: {
    color: '#444444',
  },
})`
  color: #999999;
  font-weight: bold;
  font-size: 15px;
  transition: 0.1s ease-in;

  &:hover {
    color: #7d40e7;
  }
`;
