import React from 'react';
import { MdAdd } from 'react-icons/md';

import ContainerPage from '~/components/ContainerPage';
import ActionRow from '~/components/ActionRow';
import SearchInput from '~/components/SearchInput';
import { PrimaryButton } from '~/components/Buttons';
import Table from '~/components/Table';

export default function Delivery() {
  return (
    <ContainerPage title="Gerenciando encomendas">
      <ActionRow>
        <SearchInput placeholder="Buscar por encomendas" />

        <PrimaryButton type="button">
          <MdAdd size={22} />
          CADASTRAR
        </PrimaryButton>
      </ActionRow>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>
              Ludwig van
              BeethovenBeethovenBeethovenBeethovenBeethovenBeethovenBeethovenBeethovenBeethoven
              BeethovenBeethovenBeethovenBeethovenBeethoven
            </td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>entregue</td>
            <td>test</td>
          </tr>
        </tbody>
      </Table>
    </ContainerPage>
  );
}
