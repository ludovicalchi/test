import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      Ludo Bourgogne
      <br/>
      <Button><img src='/img/etre-en-desaccord.png' />cancel</Button>
      <Button><img src='/img/se-mettre-daccord.png' />ok</Button>
    </div>
  );
}

export default App;
