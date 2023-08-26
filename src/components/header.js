import React from 'react';
import { Header, HeaderName } from 'carbon-components-react';

const AppHeader = () => {
  return (
    <Header aria-label="Carbon Tutorial">
      <HeaderName href="#" prefix="IBM">
        Carbon Design System
      </HeaderName>
    </Header>
  );
};

export default AppHeader;
