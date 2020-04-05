import React, { useRef, useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { MdInsertPhoto } from 'react-icons/md';
import { useField } from '@unform/core';

import { Container, Img, InputLabel } from './styles';

export default function FileInput({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  function handleInput(e) {
    e.stopPropagation();
    inputRef.current.click();
  }

  const handlePreview = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
      return;
    }

    const previewURL = URL.createObjectURL(file);

    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container onClick={handleInput}>
      {preview && <Img src={preview} alt="Preview" width="100" />}
      {!preview && (
        <InputLabel>
          <MdInsertPhoto size={52} />
          <span>Adicionar foto</span>
        </InputLabel>
      )}
      <input type="file" ref={inputRef} onChange={handlePreview} {...rest} />
    </Container>
  );
}

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
};
