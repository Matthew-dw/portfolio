import React, { useState, useEffect } from 'react';
import NameAnimation from './components/layout/NameAnimation';

function App() {
  // Has user clicked/scrolled on main screen yet
  const [clicked, setClicked] = useState(0);
  return (
    <div className='main'>
      <NameAnimation/>
    </div>
  );
}

export default App;
