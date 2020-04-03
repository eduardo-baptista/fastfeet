import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Button, Menu } from './styles';

export default function ActionCell({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClick = useCallback((e) => {
    if (!menuRef.current.contains(e.target)) setIsOpen(false);
    document.removeEventListener('click', handleClick);
  }, []);

  function handleClickEvent(e) {
    e.stopPropagation();
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClick);
    }
  }, [isOpen, handleClick]);

  return (
    <td>
      <Button type="button" onClick={handleClickEvent} ref={menuRef}>
        <MdMoreHoriz color="#c6c6c6" size={22} />

        {isOpen && <Menu>{children}</Menu>}
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
