import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Menu({ closeMenu, children }) {
  useEffect(() => {
    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [closeMenu]);

  return <Container>{children}</Container>;
}

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
