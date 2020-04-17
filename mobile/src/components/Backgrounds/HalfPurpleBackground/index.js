import React from 'react';
import PropTypes from 'prop-types';

import { Content, PurpleBackground, WhiteBackground } from './styles';

export default function HalfPurpleBackground({ children }) {
  return (
    <WhiteBackground>
      <PurpleBackground />
      <Content>{children}</Content>
    </WhiteBackground>
  );
}

HalfPurpleBackground.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};
