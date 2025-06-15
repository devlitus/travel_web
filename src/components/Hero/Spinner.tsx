import React from 'react';

export function Spinner({ size = 24, alt = 'Cargando...' }) {
  return (
    <img
      src='/src/assets/spinner.svg'
      alt={alt}
      style={{ width: size, height: size, display: 'inline-block', verticalAlign: 'middle' }}
    />
  );
} 