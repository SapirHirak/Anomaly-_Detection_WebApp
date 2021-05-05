
import './App.css';
import Graph from './Graph';
import Search from './Search';
// import TableApp from './TableApp';
import DragDropLearn from './DragDropLearn';
import DragDropAnomaly from './DragDropAnomaly';
import DragAndDrop from './DragAndDrop';
import LearnList from './LearnList';
import StickyHeadTable from './StickyHeadTable';
import reactDom from 'react-dom';
import { useState } from "react";


function App() {
  const [learnFiles, setLearnFile] = useState([
    { id: 1, fileName: "file 1" },
    { id: 2, fileName: "file 2" },
    { id: 3, fileName: "file 3" }
  ]);

  function addNewLearn(itemTitle) {
    setLearnFile([...learnFiles, { title: itemTitle }]);
  }

  function removeLearn(item) {
    const updateItems = learnFiles.filter(currentItem => item.title === currentItem.title)
    setLearnFile(updateItems);
  }

  return (
    <div className="App">
      <div className="mainTitle">Welcome to Anomaly Detection Webapp! </div>
      <DragDropLearn />
      <DragDropAnomaly />
      <Graph />
      <Search />
      <LearnList learnFiles={learnFiles} removeLearn={removeLearn} />

      <StickyHeadTable />


    </div>
  );
}

export default App;



