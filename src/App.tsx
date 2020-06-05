import React from 'react';
import logo from './logo.svg';
import './App.css';


const pupils1 = [
  {
    id: 0,
    name: "Maksym",
  },
  {
    id: 1,
    name: "Vasya",
  },
];

const App = () => {
  const [pupils, setPupils] = React.useState<Pupil[]>(pupils1);
  setPupils([{id:1, name: "KEK", surname : "sadasd"}])
  return (
   
  );
}

export default App;
