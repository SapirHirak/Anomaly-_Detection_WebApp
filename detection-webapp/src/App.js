import './App.css';
import Graph from './Graph';
import Search from './Search';
import Table from './Table';
import DragDrop from './DragDrop';
import { useState } from "react";

import reactDom from 'react-dom';


function App() {
  /* const [items, setItems] = useState([
     { title: 'first task', completed: false },
     { title: 'sec task', completed: false },
     { title: 'third task', completed: false }
   ]);*/

  return (
    <div className="App">
      <h1>Welcome to Anomaly Detection Webapp!</h1>
      <Graph />
      <Table />
      <Search />
      <DragDrop />
    </div>
  );
}

export default App;
