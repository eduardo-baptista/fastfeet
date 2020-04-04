import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import PropTypes from 'prop-types';

import Menu from './Menu';
import { Button } from './styles';

export default function ActionCell({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function handleClickEvent(e) {
    e.stopPropagation();
    setIsOpen(!isOpen);
  }

  return (
    <td>
      <Button type="button" onClick={handleClickEvent}>
        <MdMoreHoriz color="#c6c6c6" size={22} />

        {isOpen && <Menu closeMenu={closeMenu}>{children}</Menu>}
      </Button>
    </td>
  );
}

ActionCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
