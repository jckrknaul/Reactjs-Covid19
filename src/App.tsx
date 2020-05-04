import React from 'react';

import GlobalStyle from './styles/global';

import AppWorld from './pages/World';
import AppBrasil from './pages/Brasil';

const App: React.FC = () => {

  return (
    <>
      <AppWorld />
      <AppBrasil />

      <GlobalStyle />
    </>
  );
}



export default App;
