import React from 'react';

import Loader from '~/components/Loader';
import { Container } from './styles';

export default function LoadingIndicator() {
  return (
    <Container>
      <Loader size={45} color="#7d40e7" />
    </Container>
  );
}
