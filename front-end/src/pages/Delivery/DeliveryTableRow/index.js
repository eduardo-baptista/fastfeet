import React from 'react';
import PropTypes from 'prop-types';
import {
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
  MdDirectionsBike,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import ActionCell from '~/components/ActionCell';
import TextBodyCell from '~/components/TextBodyCell';
import SmallAvatar from '~/components/SmallAvatar';
import Status from '~/components/Status';
import { AvatarItem } from './styles';

export default function DeliveryTableRow({ delivery }) {
  return (
    <tr>
      <TextBodyCell>{delivery.maskedId}</TextBodyCell>
      <TextBodyCell>{delivery.product}</TextBodyCell>
      <TextBodyCell>{delivery.recipient.name}</TextBodyCell>
      <td>
        {delivery.deliveryman && (
          <AvatarItem>
            <SmallAvatar
              name={delivery.deliveryman.name}
              url={delivery.deliveryman.avatar?.path}
            />
            <span>{delivery.deliveryman.name}</span>
          </AvatarItem>
        )}
      </td>
      <TextBodyCell>{delivery.recipient.city}</TextBodyCell>
      <TextBodyCell>{delivery.recipient.state}</TextBodyCell>
      <td>
        <Status>{delivery.status}</Status>
      </td>
      <ActionCell>
        {delivery.status === 'PENDENTE' && (
          <Link to={`/encomendas/${delivery.id}/iniciar`}>
            <MdDirectionsBike size={15} color="#c1bc35" />
            Iniciar Entrega
          </Link>
        )}
        <Link to={`/encomendas/${delivery.id}/visualizar`}>
          <MdRemoveRedEye size={15} color="#8e5be8" />
          Visualizar
        </Link>
        <Link to={`/encomendas/${delivery.id}/editar`}>
          <MdModeEdit size={15} color="#4d85ee" />
          Editar
        </Link>
        <Link to={`/encomendas/${delivery.id}/excluir`}>
          <MdDeleteForever size={15} color="#de3b3b" />
          Excluir
        </Link>
      </ActionCell>
    </tr>
  );
}

DeliveryTableRow.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number,
    product: PropTypes.string,
    maskedId: PropTypes.string,
    recipient: PropTypes.object,
    deliveryman: PropTypes.object,
    status: PropTypes.string,
  }).isRequired,
};
