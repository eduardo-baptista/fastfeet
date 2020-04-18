import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import ContainerPage from '~/components/ContainerPage';
import ActionRow from '~/components/ActionRow';
import SearchInput from '~/components/SearchInput';
import { PrimaryButton } from '~/components/Buttons';
import Table from '~/components/Table';
import EmptyTableIndicator from '~/components/EmptyTableIndicator';
import LoadingIndicator from '~/components/LoadingIndicator';

import history from '~/services/history';
import RecipientTableRow from './RecipientTableRow';

import Delete from './Delete';

import { getDataRequest } from '~/store/modules/recipient/actions';

export default function Recipient() {
  const recipients = useSelector((store) => store.recipient.recipients);
  const loading = useSelector((store) => store.recipient.loading);

  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const hasData = useMemo(() => recipients.length > 0, [recipients]);

  function handleCreateClickButton(e) {
    e.preventDefault();
    e.stopPropagation();
    history.push('/destinatarios/cadastrar');
  }

  useEffect(() => {
    dispatch(getDataRequest(filter));
  }, [dispatch, filter]);

  return (
    <ContainerPage title="Gerenciando entregadores">
      <ActionRow>
        <SearchInput
          placeholder="Buscar por entregadores"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <PrimaryButton type="button" onClick={handleCreateClickButton}>
          <MdAdd size={22} />
          CADASTRAR
        </PrimaryButton>
      </ActionRow>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((recipient) => (
            <RecipientTableRow recipient={recipient} key={recipient.id} />
          ))}
        </tbody>
      </Table>
      {loading && <LoadingIndicator />}
      {!hasData && !loading && <EmptyTableIndicator />}
      <Route path="/destinatarios/:id/excluir" component={Delete} />
    </ContainerPage>
  );
}
