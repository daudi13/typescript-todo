import React from 'react';
import './App.css';
let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
let theAge: number | string;

theAge = 4;

const printName =( name: string) => {
  console.log(name)
}

printName('daudi')

type Person = {
  name: string;
  age?: number;
};

let Person: Person = {
  name: "Daudi",
};

let lotsOfPeople: Person[];

function App() {
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
