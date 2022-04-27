import React from 'react';
import Produto from './Produto';
import CleanButtom from './CleanButtom';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <GlobalStorage>
      <Produto />
      <CleanButtom />
    </GlobalStorage>
  );
}

export default App;
