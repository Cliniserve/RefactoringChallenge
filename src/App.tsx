import React, { useState } from 'react';
import Home from './screens/home';
import type { Area } from './screens/home/types';
import initialState from './state';

function App() {
  const [state, setState] = useState<Area[]>(initialState);
  return (
    <Home
      areaList={state}
      setAreaList={setState}
    />
  );
}

export default App;
