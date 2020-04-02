import React from 'react';

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
      <ActionCell />
    </tr>
  );
}
