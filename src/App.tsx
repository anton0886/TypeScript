import React, { useEffect } from 'react';
import ToDoList from "./Components/toDoList";
import AddItemBlock from "./Components/addItemBlock";

const App = () => {

  const [toDoList, setToDoList] = React.useState<ListItem[] | []>([]);

  return (
    <div>
      <ToDoList toDoList={toDoList} />
      <AddItemBlock toDoList={toDoList}/>
    </div>
  );
}

export default App;
