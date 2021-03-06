import React from 'react';
import Nav from './nav.mdx';

export default function Layout({ children }) {
  return (
    <main style={{ margin: '10px' }}>
      <Nav />
      {children}
    </main>
  );
}
