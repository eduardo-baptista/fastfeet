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
import DeliverymenTableRow from './DeliverymenTableRow';

import Delete from './Delete';

import { getDataRequest } from '~/store/modules/deliveryman/actions';

export default function Deliveryman() {
  const deliverymen = useSelector((store) => store.deliveryman.deliverymen);
  const loading = useSelector((store) => store.deliveryman.loading);

  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const hasData = useMemo(() => deliverymen.length > 0, [deliverymen]);

  function handleCreateClickButton(e) {
    e.preventDefault();
    e.stopPropagation();
    history.push('/entregadores/cadastrar');
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
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymen.map((deliveryman) => (
            <DeliverymenTableRow
              deliveryman={deliveryman}
              key={deliveryman.id}
            />
          ))}
        </tbody>
      </Table>
      {loading && <LoadingIndicator />}
      {!hasData && !loading && <EmptyTableIndicator />}
      <Route path="/entregadores/:id/excluir" component={Delete} />
    </ContainerPage>
  );
}
