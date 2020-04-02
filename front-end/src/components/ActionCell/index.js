import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Button, Menu } from './styles';

export default function ActionCell() {
  return (
    <td>
      <Button type="button">
        <MdMoreHoriz color="#c6c6c6" size={22} />
        <Menu>
          <Link to="/encomendas/visualizar">Visualizar</Link>
          <Link to="/encomendas/Editar">Editar</Link>
          <Link to="/encomendas/Excluir">Excluir</Link>
        </Menu>
      </Button>
    </td>
  );
}
