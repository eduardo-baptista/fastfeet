import React from 'react';
import { MdAdd } from 'react-icons/md';

import ContainerPage from '~/components/ContainerPage';
import ActionRow from '~/components/ActionRow';
import SearchInput from '~/components/SearchInput';
import { PrimaryButton } from '~/components/Buttons';

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
    </ContainerPage>
  );
}
