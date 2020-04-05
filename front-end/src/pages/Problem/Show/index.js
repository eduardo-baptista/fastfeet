import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Title } from './styles';
import Modal from '~/components/Modal';

export default function Show() {
  const { id } = useParams();
  const problem = useSelector((state) =>
    state.problem.problems.find((i) => i.id === Number(id))
  );

  return (
    <Modal backTo="/problemas">
      <Title>VISUALIZAR PROBLEMA</Title>
      {problem?.description}
    </Modal>
  );
}
