import React from 'react';
import './Inputfield.css';

const Inputfield = () => {
  return (  
    <form className='input'>
      <input className="input__box" type="input" placeholder='Enter a task'></input>
      <button className="input_submit" type="submit">GO</button>
    </form>
  )
}

export default Inputfield;