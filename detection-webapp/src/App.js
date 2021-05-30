import './App.css';
import Graph from './Graph';
import Search from './ModelsList/Search';
import DragDropLearn from './DragDrop/DragDropLearn';
import DragDropAnomaly from './DragDrop/DragDropAnomaly';
import LearnList from './ModelsList/LearnList';
import StickyHeadTable from './StickyHeadTable';
import { useEffect, useState } from "react";
import axios from "axios"


function App() {
    // array to hold the anomalies we receive from the server
    const [anomalies, setAnomalies] = useState([]);
    // filtered files for searching for specific model
    const [filterredName, setfilterredName] = useState("")
    // list of all models
    const [learnFiles, setLearnFile] = useState([]);
    // variable to track current model id
    const [currentIdModel, setcurrentIdModel] = useState(0)
    // for realtime updates
    useEffect(() => {
        getLearnFiles();
    }, [])

    // calls HTTP GET request to receive all models on the server and updates it on the webpage
    const getLearnFiles = async () => {
        let currentLearnFiles = await axios.get("http://localhost:1234/getModels")
        setLearnFile(currentLearnFiles.data);
    }

    // calls HTTP DELETE request to delete the model from the server
    async function removeLearn(itemId) {
        // a way to save the id to make it easy to send in the delete request
        const data = {
          id: itemId
        }
        const updateItems = await axios.delete("http://localhost:1234/deleteModel", {data})
        // updates our models list
        setLearnFile(updateItems.data);
    }

    // filters list by received text
    function searchFilterEvent(text) {
        setfilterredName(text);
    }

    //filter the array by search words
    function renderLearnFiles() {
        return learnFiles.filter(file => file.fileName.includes(filterredName));
    }

    // calls HTTP GET request to receive a list (json) of anomalies
    async function getAnomalies() {
        let anomalies = await axios.get(`http://localhost:1234/getAnomaly`)
        // prints anomalies to console for easy access
        console.log(anomalies.data)
        // updates our anomalies list
        setAnomalies(anomalies.data)
    }

    // chooses current model id to work on
    function handleChooseModel(itemId) {
        setcurrentIdModel(itemId)
    }

    return (
        <div className="App">
            {/* Title to have on header of the page */}
            <div className="mainTitle">Welcome to Anomaly Detection Webapp! </div>
            {/* grid to organize how our webpage is displayed. Instructions in the CSS tell it how to look */}
            <div className="grid-container">
                {/* dropbox for learn file */}
                <div className="DragDropLearn">
                    <div style={{ textAlign: "center" }}>Please enter your Learn csv file.</div>
                    <DragDropLearn getLearnFiles={getLearnFiles} />
                </div>

                {/* list to choose model from */}
                <div className="LearnList">
                    <div>Please choose uploaded model from list:</div>
                    <section className="todoapp">
                        {/* search feature for models list */}
                        <Search searchFilterEvent={searchFilterEvent} />

                        {learnFiles.length === 0 ?
                            <span>No Models</span> :
                            <LearnList learnFiles={renderLearnFiles()} removeLearn={removeLearn} handleChooseModel={handleChooseModel} currentIdModel={currentIdModel} />
                        }

                    </section>
                </div>

                {/* dropbox for anomaly file */}
                <div className="anomalyDropDiv">
                    <p className="greatTitle">Great! now, add your anomaly csv file.</p>
                    <DragDropAnomaly currentIdModel={currentIdModel} getAnomalies={getAnomalies} />
                </div>
                

                {/* we ended up taking out the graph but it's still here for possible future use */}
                {/* <div className="graphDiv">
                    <Graph anomalies={anomalies} />
                </div> */}

                {/* displays anomalies */}
                <div className="tableDiv">
                    <StickyHeadTable anomalies={anomalies} />
                </div>

            </div>

        </div>
    );
}

export default App;



