import React from 'react';

export default function Input({ placeholder, background = 'yellow' }) {
  return <input placeholder={placeholder} style={{ background: background }} />
}
