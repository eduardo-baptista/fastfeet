import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import randomcolor from 'randomcolor';

import { Container, Img } from './styles';

export default function SmallAvatar({ url, name }) {
  const getInitials = useCallback((nameToGet) => {
    const names = nameToGet.split(' ');
    if (names.length < 2) return nameToGet.substring(0, 2).toUpperCase();
    return `${names[0][0]}${names[1][0]}`.toUpperCase();
  }, []);

  const initials = useMemo(() => (url ? '' : getInitials(name)), [
    url,
    name,
    getInitials,
  ]);

  if (url)
    return (
      <Img src={`${process.env.REACT_APP_API}/files/${url}`} alt="avatar" />
    );

  return (
    <Container color={randomcolor({ luminosity: 'dark' })}>
      {initials}
    </Container>
  );
}

SmallAvatar.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
};

SmallAvatar.defaultProps = {
  url: '',
};
