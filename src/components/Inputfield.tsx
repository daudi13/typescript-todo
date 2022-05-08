import React from 'react';
import './Inputfield.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

const Inputfield:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (  
    <form className='input' onSubmit={handleAdd}>
      <input
        className="input__box"
        type="input"
        placeholder='Enter a task'
        onChange={
          (e) => setTodo(e.target.value)
        }
      >

      </input>
      <button className="input_submit" type="submit">GO</button>
    </form>
  )
}

export default Inputfield;