
import './App.css';
import Graph from './Graph';
import Search from './Search';
// import TableApp from './TableApp';
import DragDropLearn from './DragDropLearn';
import DragDropAnomaly from './DragDropAnomaly';
import DragAndDrop from './DragAndDrop';
import StickyHeadTable from './StickyHeadTable';
// import reactDom from 'react-dom';


function App() {
  /* const [items, setItems] = useState([
     { title: 'first task', completed: false },
     { title: 'sec task', completed: false },
     { title: 'third task', completed: false }
   ]);*/
  return (
    <div className="App">
      <div className="mainTitle">Welcome to Anomaly Detection Webapp! </div>
      <DragDropLearn />
      <DragDropAnomaly />
      <Graph />
      <Search />
      <StickyHeadTable />


    </div>
  );
}

export default App;



