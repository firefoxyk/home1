import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './Components/Button';
import { Result } from './Components/Result';

function App() {
  const [answerString, setAnswerString] = useState<string>();
  const [isValid, setIsValid] = useState<boolean>();

  const setterEvent = (s:string, b:boolean) => {
    setAnswerString(s);
    setIsValid(b);
  }
  
  return <>   
    <Button onClick={setterEvent}/>
    <Result textIn={answerString || ' '} isValid={isValid==undefined ? false : isValid}/>
  </>;
}

export default App;
