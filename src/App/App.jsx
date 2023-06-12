import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      Vive la Bourgogne 
      <br/>
      <Button bgColor="red"><img src='/img/etre-en-desaccord.png' />cancel</Button>
      <Button bgColor="green" onClick={(unParamDeLEnfant)=>{
        console.log('fonction envoyée par le parent', unParamDeLEnfant);
      }}><img src='/img/se-mettre-daccord.png' />ok</Button>
    </div>
  );
}

export default App;
