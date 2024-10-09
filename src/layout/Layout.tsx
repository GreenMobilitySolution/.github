import React from 'react';
import Router from '../Router/Router';

const Layout = () => {
  return (
    <div data-testid="layout-component">
      <main>
        <Router />
      </main>
    </div>
  );
};

export default Layout;
