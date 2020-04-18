import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import ContainerPage from '~/components/ContainerPage';
import Table from '~/components/Table';
import EmptyTableIndicator from '~/components/EmptyTableIndicator';
import LoadingIndicator from '~/components/LoadingIndicator';

import ProblemTableRow from './ProblemTableRow';

import Show from './Show';
import Delete from './Delete';

import { getDataRequest } from '~/store/modules/problem/actions';

export default function Problem() {
  const problems = useSelector((store) => store.problem.problems);
  const loading = useSelector((store) => store.problem.loading);

  const dispatch = useDispatch();
  const hasData = useMemo(() => problems.length > 0, [problems]);

  useEffect(() => {
    dispatch(getDataRequest());
  }, [dispatch]);

  return (
    <ContainerPage title="Problemas na entrega">
      <Table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Status da encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <ProblemTableRow problem={problem} key={problem.id} />
          ))}
        </tbody>
      </Table>
      {loading && <LoadingIndicator />}
      {!hasData && !loading && <EmptyTableIndicator />}
      <Route path="/problemas/:id/visualizar" component={Show} />
      <Route path="/problemas/:id/excluir" component={Delete} />
    </ContainerPage>
  );
}
