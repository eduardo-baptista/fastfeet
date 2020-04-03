import React from 'react';
import { MdRemoveRedEye, MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

import ActionCell from '~/components/ActionCell';
import TextBodyCell from '~/components/TextBodyCell';
import { Status } from './styles';

export default function DeliveryTableRow() {
  return (
    <tr>
      <TextBodyCell>#01</TextBodyCell>
      <TextBodyCell>
        Ludwig van Beethoven -webkit-line-clamp: 1; -webkit-line-clamp: 1;
        -webkit-line-clamp: 1;
      </TextBodyCell>
      <TextBodyCell>John Doe</TextBodyCell>
      <TextBodyCell>Rio do Sul</TextBodyCell>
      <TextBodyCell>Santa Catarina</TextBodyCell>
      <td>
        <Status>RETIRADA</Status>
      </td>
      <ActionCell>
        <Link to="/encomendas/visualizar">
          <MdRemoveRedEye size={15} color="#8e5be8" />
          Visualizar
        </Link>
        <Link to="/encomendas/Editar">
          <MdModeEdit size={15} color="#4d85ee" />
          Editar
        </Link>
        <Link to="/encomendas/Excluir">
          <MdDeleteForever size={15} color="#de3b3b" />
          Excluir
        </Link>
      </ActionCell>
    </tr>
  );
}
