
import './App.css';
import Graph from './Graph';
import Search from './ModelsList/Search';
// import TableApp from './TableApp';
import DragDropLearn from './DragDrop/DragDropLearn';
import DragDropAnomaly from './DragDrop/DragDropAnomaly';
import DragAndDrop from './DragAndDrop';
import LearnList from './ModelsList/LearnList';
import StickyHeadTable from './StickyHeadTable';
import reactDom from 'react-dom';
import TableAnomaly from './TableAnomaly';
import { useState } from "react";


function App() {
  const [anomalies, setAnomalies] = useState([
    {
      Anomaly_0: {
        Description: "throttle-engine_rpm",
        start: 224,
        end: 1472
      }, Anomaly_1: {
        Description: "airspeed-kt-airspeed-indicator_indicated-speed-kt",
        start: 504,
        end: 700
      }, Anomaly_2: {
        Description: "slip-skid-ball_indicated-slip-skid-airspeed-indicator_indicated-speed-kt",
        start: 554,
        end: 614
      }
    }
  ]);
  const [filterredName, setfilterredName] = useState("")
  const [learnFiles, setLearnFile] = useState([
    { id: 1, fileName: "file 1" },
    { id: 2, fileName: "file 2" },
    { id: 3, fileName: "file 3" }
  ]);

  function addNewLearn(itemTitle) {
    setLearnFile([...learnFiles, { id: 4, fileName: itemTitle }]);
  }

  function removeLearn(itemId) {
    const updateItems = learnFiles.filter(currentItem => itemId !== currentItem.id)

    setLearnFile(updateItems);
  }

  //
  function searchFilterEvent(text) {
    setfilterredName(text);
  }

  //filter the array by search words
  function renderLearnFiles() {
    return learnFiles.filter(file => file.fileName.includes(filterredName));
  }

  return (
    <div className="App">
      <div className="mainTitle">Welcome to Anomaly Detection Webapp! </div>
      <DragDropLearn />
      <DragDropAnomaly />
      <Graph />
      <section className="todoapp">
        <Search searchFilterEvent={searchFilterEvent} />
        <LearnList learnFiles={renderLearnFiles()} removeLearn={removeLearn} />
      </section>
      {/* <TableAnomaly /> */}
      <StickyHeadTable anomalies={anomalies} />


    </div>
  );
}

export default App;



