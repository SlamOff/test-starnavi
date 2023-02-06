import { useState, useEffect } from 'react';
import Dropdown from "./components/Dropdown";
import Field from './components/Field';
import Stats from './components/Stats';

const App = () => {
  const [ modesList, setModesList ] = useState([]);
  const [ mode, setMode ] = useState(0); 

  const getSelectedMode = mode => setMode(mode);

  useEffect(() => {
    fetch('https://demo7919674.mockable.io/')
      .then(response => response.json())
      .then(data => {
        setModesList(data);
      });
  }, []);

  return (
    
    <div className="container">
      <div>
        <Dropdown modes={modesList} selectedMode={getSelectedMode} />
        {!!mode && (
          <Field mode={mode} />
        )}
      </div>
      {!!mode && (
        <Stats />
      )}
    </div>
  );
};

export default App;