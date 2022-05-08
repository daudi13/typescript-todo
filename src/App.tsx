import React, { useState } from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import { Todo } from './components/model';


// let name: string;
// let age: number;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];
// let theAge: number | string;

// let printName: (name: string) => void;

// theAge = 4;

// const printName =( name: string) => {
//   console.log(name)
// }

// printName('daudi')

// type X = {
//   name: string;
//   age: number;
// }

// type Y = X & {
//   proffesion: string;
//   isRetired: boolean;
// }

// let y: Y = {
//   proffesion: "messuse",
// isRetired: false,
// name: 'daudi',
// age: 44,
// }

// interface X {
//   name: String;
//   age: number;
// }

// interface Y extends X {
//   proffession: 'messuse';
//   isRetired: false;
// }

// let y: Y = {
//   proffession: "messuse",
//   isRetired: false,
//   name: 'daudi',
//   age: 44,
// }

// type Person = {
//   name: string;
//   age?: number;
// };

// let Person: Person = {
//   name: "Daudi",
// };

// let lotsOfPeople: Person[];

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); 

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }

  console.log(todos)

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
