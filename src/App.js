import './App.css';
import React, { useState } from 'react';

function App() {
  const [minutes, setMinutes] = useState();

  const onChange = (event) => {
    setMinutes(event.target.value);
  };

  return (
    <div>
        <h1>Converter</h1>
        <label htmlFor="mins">Minutes</label>
        <input 
            id="mins" 
            value={minutes}
            placeholder="Minutes" 
            type="number"
            onChange={onChange}/>
        <span>Your minutes: {minutes}</span>
        <label htmlFor="hrs">Hours</label>
        <input id="hrs" placeholder="Hours" type="number"/>
    </div>
  );
}

export default App;

