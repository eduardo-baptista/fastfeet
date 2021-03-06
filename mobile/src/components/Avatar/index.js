import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Text, Image } from './styles';
import api from '~/services/api';

export default function Avatar({ size, fontSize, url, name, ...rest }) {
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

  return (
    <Container size={size} {...rest}>
      {url ? (
        <Image
          size={size}
          source={{
            uri: `${api.defaults.baseURL}/files/857c5af124a9d65af2413f01ec93bb0f.jpg`,
          }}
        />
      ) : (
        <Text fontSize={fontSize}>{initials}</Text>
      )}
    </Container>
  );
}

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  url: '',
};
