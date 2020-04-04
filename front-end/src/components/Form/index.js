import React from 'react';
import PropTypes from 'prop-types';
import { Form as Unform } from '@unform/web';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import ActionRow from '~/components/ActionRow';
import { PrimaryButton, SecondaryButton } from '~/components/Buttons';

import { Container, Title, ButtonsGroup, Content } from './styles';

import history from '~/services/history';

const Form = React.forwardRef(({ title, backTo, children, ...rest }, ref) => {
  function handleBack() {
    history.push(backTo);
  }

  return (
    <Unform ref={ref} {...rest}>
      <Container>
        <ActionRow>
          <Title>{title}</Title>
          <ButtonsGroup>
            <SecondaryButton type="button" onClick={handleBack}>
              <MdKeyboardArrowLeft size={22} />
              VOLTAR
            </SecondaryButton>
            <PrimaryButton type="submit">
              <MdDone size={22} />
              SALVAR
            </PrimaryButton>
          </ButtonsGroup>
        </ActionRow>

        <Content>{children}</Content>
      </Container>
    </Unform>
  );
});

Form.propTypes = {
  title: PropTypes.string.isRequired,
  backTo: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default Form;
