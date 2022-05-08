import React from 'react'

const Inputfield = () => {
  return (  
    <form className='input'>
      <input className="input__box" type="input" placeholder='Enter a task'></input>
      <button className="input__submit" type="submit">GO</button>
    </form>
  )
}

export default Inputfield;