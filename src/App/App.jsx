import React, {useState, useEffect} from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  const [counter, setCounter] = useState(0)

  useEffect(()=> {
    console.log('valeur post setCounter', counter)

    return ()=>{

    }
  }, [counter])

  useEffect(()=> {
    console.log('création du composant set des etats initiaux (car le tableau est vide => [])')
    setCounter(425587965)
  }, [])

  return (
    <div className="App">
      Vive la Bourgogne <img src='/img/346209.svg' height="30px;" />
      <br/>
      <br/>
      Compteur de fans : {counter}
      <br/>
      <br/>
      <Button className="error" onClick={(unParamDeLEnfant)=>{
        setCounter(counter-1)
        console.log(counter)
      }}><img src='/img/etre-en-desaccord.png' />-1</Button>
      <Button className="primary" onClick={(unParamDeLEnfant)=>{
        setCounter(counter+1)
        console.log(counter)
      }}><img src='/img/se-mettre-daccord.png' />+1</Button>
    </div>
  );
}

export default App;
