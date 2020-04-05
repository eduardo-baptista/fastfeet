import React from 'react';
import PropTypes from 'prop-types';
import { MdRemoveRedEye, MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

import ActionCell from '~/components/ActionCell';
import TextBodyCell from '~/components/TextBodyCell';
import Status from '~/components/Status';

import { SmallCell } from './styles';

export default function ProblemTableRow({ problem }) {
  return (
    <tr>
      <SmallCell>{problem.maskedDeliveryId}</SmallCell>
      <SmallCell>
        <Status>{problem.delivery.status}</Status>
      </SmallCell>
      <TextBodyCell>{problem.description}</TextBodyCell>
      <ActionCell>
        <Link to={`/problemas/${problem.id}/visualizar`}>
          <MdRemoveRedEye size={15} color="#8E5BE8" />
          Visualizar
        </Link>
        <Link to={`/problemas/${problem.id}/excluir`}>
          <MdDeleteForever size={15} color="#de3b3b" />
          Cancelar encomenda
        </Link>
      </ActionCell>
    </tr>
  );
}
ProblemTableRow.propTypes = {
  problem: PropTypes.shape({
    id: PropTypes.number,
    delivery: PropTypes.object,
    maskedDeliveryId: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
