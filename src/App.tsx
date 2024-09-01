import React, { useState } from 'react';
import Index from './Components/pages/index';
import { CoinsProvider } from './Components/context/CoinsContext';
import { AutoIncrimentValueProvider } from './Components/context/Attributes/Agility/AutoIncrimentValue';

function App() {
  return (
    <div className="App">
      <CoinsProvider>
        <AutoIncrimentValueProvider>
          <Index/>
        </AutoIncrimentValueProvider>
      </CoinsProvider>
    </div>
  );
}

export default App;
