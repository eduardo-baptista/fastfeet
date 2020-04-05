import React from 'react';
import PropTypes from 'prop-types';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

import ActionCell from '~/components/ActionCell';
import TextBodyCell from '~/components/TextBodyCell';

export default function RecipientTableRow({ recipient }) {
  return (
    <tr>
      <TextBodyCell>{recipient.maskedId}</TextBodyCell>
      <TextBodyCell>{recipient.name}</TextBodyCell>
      <TextBodyCell>{`${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`}</TextBodyCell>
      <ActionCell>
        <Link to={`/destinatarios/${recipient.id}/editar`}>
          <MdModeEdit size={15} color="#4d85ee" />
          Editar
        </Link>
        <Link to={`/destinatarios/${recipient.id}/excluir`}>
          <MdDeleteForever size={15} color="#de3b3b" />
          Excluir
        </Link>
      </ActionCell>
    </tr>
  );
}

RecipientTableRow.propTypes = {
  recipient: PropTypes.shape({
    id: PropTypes.number,
    maskedId: PropTypes.string,
    name: PropTypes.string,
    street: PropTypes.string,
    number: PropTypes.number,
    city: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
};
