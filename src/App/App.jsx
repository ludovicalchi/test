import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      Vive la Bourgogne 
      <br/>
      <Button className="error"><img src='/img/etre-en-desaccord.png' />cancel</Button>
      <Button className="primary" onClick={(unParamDeLEnfant)=>{
        console.log('fonction envoyée par le parent', unParamDeLEnfant);
      }}><img src='/img/se-mettre-daccord.png' />ok</Button>
    </div>
  );
}

export default App;
