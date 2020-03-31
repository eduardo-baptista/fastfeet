import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Links, NavLink, Separator } from './styles';

import { ReactComponent as Logo } from '~/assets/logo.svg';

export default function Header() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Logo />
      <Separator />
      <Links>
        <ul>
          <NavLink to="/encomendas">ENCOMENDAS</NavLink>
        </ul>
        <ul>
          <NavLink to="/entregadores">ENTREGADORES</NavLink>
        </ul>
        <ul>
          <NavLink to="/destinatarios">DESTINATÁRIOS</NavLink>
        </ul>
        <ul>
          <NavLink to="/problemas">PROBLEMAS</NavLink>
        </ul>
      </Links>
      <aside>
        <strong>Admin FastFeet</strong>
        <button type="button" onClick={handleLogout}>
          sair do sistema
        </button>
      </aside>
    </Container>
  );
}
