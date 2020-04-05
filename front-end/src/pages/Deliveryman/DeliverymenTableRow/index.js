import React from 'react';
import PropTypes from 'prop-types';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

import ActionCell from '~/components/ActionCell';
import TextBodyCell from '~/components/TextBodyCell';
import SmallAvatar from '~/components/SmallAvatar';

export default function DeliverymenTableRow({ deliveryman }) {
  return (
    <tr>
      <TextBodyCell>{deliveryman.maskedId}</TextBodyCell>
      <td>
        <SmallAvatar name={deliveryman.name} url={deliveryman.avatar?.path} />
      </td>
      <TextBodyCell>{deliveryman.name}</TextBodyCell>
      <TextBodyCell>{deliveryman.email}</TextBodyCell>
      <ActionCell>
        <Link to={`/entregadores/${deliveryman.id}/editar`}>
          <MdModeEdit size={15} color="#4d85ee" />
          Editar
        </Link>
        <Link to={`/entregadores/${deliveryman.id}/excluir`}>
          <MdDeleteForever size={15} color="#de3b3b" />
          Excluir
        </Link>
      </ActionCell>
    </tr>
  );
}
DeliverymenTableRow.propTypes = {
  deliveryman: PropTypes.shape({
    id: PropTypes.number,
    maskedId: PropTypes.string,
    avatar: PropTypes.object,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
