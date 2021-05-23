import './App.css';
import Graph from './Graph';
import Search from './ModelsList/Search';
import DragDropLearn from './DragDrop/DragDropLearn';
import DragDropAnomaly from './DragDrop/DragDropAnomaly';
import DragAndDrop from './DragAndDrop';
import LearnList from './ModelsList/LearnList';
import StickyHeadTable from './StickyHeadTable';
import reactDom from 'react-dom';
import { useEffect, useState } from "react";
import axios from "axios"


function App() {
    const [anomalies, setAnomalies] = useState([
        // {
        //   Anomaly_0: {
        //     Description: "throttle-engine_rpm",
        //     start: 224,
        //     end: 1472
        //   }, Anomaly_1: {
        //     Description: "airspeed-kt-airspeed-indicator_indicated-speed-kt",
        //     start: 504,
        //     end: 700
        //   }, Anomaly_2: {
        //     Description: "slip-skid-ball_indicated-slip-skid-airspeed-indicator_indicated-speed-kt",
        //     start: 554,
        //     end: 614
        //   }
        // }
    ]);
    const [filterredName, setfilterredName] = useState("")
    const [learnFiles, setLearnFile] = useState([
        { id: 1, fileName: "name", type: "type", time: "10" },
        { id: 2, fileName: "ff", type: "type", time: "10" },
        { id: 3, fileName: "sshh", type: "type", time: "10" }
    ]);
    const [currentIdModel, setcurrentIdModel] = useState(0)

    useEffect(() => {
        getLearnFiles();
    }, [])

    const getLearnFiles = async () => {
        let currentLearnFiles = await axios.get("http://localhost:1234/getModels")
        setLearnFile(currentLearnFiles.data);
    }

    const addNewLearn = async () => {
        let currentLearnFiles = await axios.get("http://localhost:1234/getModels")
        setLearnFile(currentLearnFiles.data);

    }

    async function removeLearn(itemId) {
        //const updateItems = learnFiles.filter(currentItem => itemId !== currentItem.id)
        const data = {
          id: itemId
        }
        const updateItems = await axios.delete("http://localhost:1234/deleteModel", {data})

        setLearnFile(updateItems.data);

    }

    //
    function searchFilterEvent(text) {
        setfilterredName(text);
    }

    //filter the array by search words
    function renderLearnFiles() {
        return learnFiles.filter(file => file.fileName.includes(filterredName));
    }

    async function getAnomalies() {
        let anomalies = await axios.get(`http://localhost:1234/getAnomaly`)
        console.log(anomalies.data)
        setAnomalies(anomalies.data)
    }

    function handleChooseModel(itemId) {
        setcurrentIdModel(itemId)
        console.log(currentIdModel)
    }

    return (
        <div className="App">

            <div className="mainTitle">Welcome to Anomaly Detection Webapp! </div>
            <div className="grid-container">
                <div className="DragDropLearn">
                    <div style={{ textAlign: "center" }}>Please enter your Learn csv file.</div>
                    <DragDropLearn addNewLearn={addNewLearn} />
                </div>

                <div className="LearnList">
                    <div>Please choose uploaded model from list:</div>
                    <section className="todoapp">

                        <Search searchFilterEvent={searchFilterEvent} />

                        {learnFiles.length === 0 ?
                            <span>No Models</span> :
                            <LearnList learnFiles={renderLearnFiles()} removeLearn={removeLearn} handleChooseModel={handleChooseModel} currentIdModel={currentIdModel} />
                        }

                    </section>
                </div>

                <div className="anomalyDropDiv">
                    <p className="greatTitle">Great! now, add your anomaly csv file.</p>
                    <DragDropAnomaly currentIdModel={currentIdModel} getAnomalies={getAnomalies} />
                </div>

                <div className="graphDiv">
                    <Graph anomalies={anomalies} />
                </div>

                <div className="tableDiv">
                    <StickyHeadTable anomalies={anomalies} />
                </div>

            </div>

        </div>
    );
}

export default App;



