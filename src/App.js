import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount))

  }

  return (
    <main className="section-center">
  <h2>tired of boring lorem ipsum </h2>
  <form onSubmit={handleSubmit} className="lorem-form">
  <label htmlFor="amount">
    paragraphs:
  </label>
  <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>
    <button className='btn' type="submit">
      generate
    </button>
  </form>
  <p className="lorem-text">
    {text.map((item, index)=>{
      return <p key={index}>{item}</p>
    })}
  </p>
  </main>
    )
}

export default App;
