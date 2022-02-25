import React from 'react';
import { useState } from "react";

function Form() {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [total, settotal] = useState();

  function add() {
    settotal(num1 + num2);
  }
  function sub() {
    settotal(num1 - num2);
  }
  function mul() {
    settotal(num1 * num2);
  }
  function div() {
    settotal(num1 / num2);
  }
  return (
    <div className='form'>
      <h1>Assignment 1</h1>
      <h1>Calculator</h1>
      <div>
      <label>Number 1</label>
      <input
        type="text"
        value={num1}
        onChange={(e) => setnum1(+e.target.value)}
      />
</div>
<div>
      <label>Number 2</label>
      <input
        type="text"
        value={num2}
        onChange={(e) => setnum2(+e.target.value)}
      />
      </div>
<div>
      <button className="button" onClick={add}>
        +
      </button>
      <button className="button" onClick={sub}>
        -
      </button>
      <button className="button" onClick={mul}>
        *
      </button>
      <button className="button" onClick={div}>
        /
      </button>

      <h1>{total}</h1>
      </div>
    </div>
  )
}

export default Form