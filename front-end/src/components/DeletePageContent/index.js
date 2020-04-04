import React from 'react';

import PropTypes from 'prop-types';
import { PrimaryButton, SecondaryButton } from '~/components/Buttons';
import { Text, ButtonRow } from './styles';

import history from '~/services/history';

export default function DeletePageContent({ backTo, onConfirm, children }) {
  function handleBack(e) {
    e.preventDefault();
    e.stopPropagation();
    history.push(backTo);
  }

  async function handleConfirm(e) {
    e.preventDefault();
    e.stopPropagation();
    onConfirm();
  }

  return (
    <>
      <Text>{children}</Text>
      <ButtonRow>
        <SecondaryButton type="button" onClick={handleBack}>
          VOLTAR
        </SecondaryButton>
        <PrimaryButton type="button" onClick={handleConfirm}>
          CONFIRMAR
        </PrimaryButton>
      </ButtonRow>
    </>
  );
}

DeletePageContent.propTypes = {
  backTo: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};
