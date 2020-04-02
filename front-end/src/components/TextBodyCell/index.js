import React from 'react';
import PropTypes from 'prop-types';

import { Cell } from './styles';

export default function TextBodyCell({ children }) {
  return (
    <Cell>
      <div>{children}</div>
    </Cell>
  );
}

TextBodyCell.propTypes = {
  children: PropTypes.string.isRequired,
};
