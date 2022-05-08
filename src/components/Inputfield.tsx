import React, { useRef } from 'react';
import './Inputfield.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Inputfield: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (  
    <form className='input' onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur();
    }}>
      <input
        ref={inputRef}
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