
import './App.css';
import Graph from './Graph';
import Search from './Search';
// import TableApp from './TableApp';
import DragDrop from './DragDrop';
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
      <h1>Welcome to Anomaly Detection Webapp! </h1>
      <DragDrop />
      <Search />
      <Graph />
      <StickyHeadTable />
        hellooooo

    </div>
  );
}

export default App;



