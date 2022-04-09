import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import CounterTwo from "./components/CounterVariantTwo/CounterTwo";
import CounterRedux from "./counterWithRedux";

function App() {
  return (
    <div className="App" style={{display: 'inline-flex'}}>
        <Counter/>
        <CounterTwo />
    </div>
  );
}

export default App;
