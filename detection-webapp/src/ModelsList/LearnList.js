import Radio from '@material-ui/core/Radio';
import React from 'react';
import { useState } from 'react';
function LearnList({ learnFiles, removeLearn, handleChooseModel, currentIdModel }) {
    function handleRemove(itemId) {
        removeLearn(itemId)
    }

    //const [selectedModel, setselectedModel] = useState(1)

    /*function handleChooseModel(selectedModel) { //get current id that selected
        setselectedModel(selectedModel)
        console.log(selectedModel)
    }*/

    return (
        <div>
            <section className="main">
                <input className="toggle-all"
                    type="checkbox" />
                <ul className="todo-list">

                    {learnFiles.map((item, index) => (
                        <li key={index}>

                            <div className="view">

                                <input className="toggle"

                                    type="checkbox" />

                                <label> <Radio
                                    checked={currentIdModel === item.id}
                                    onChange={() => handleChooseModel(item.id)}
                                    value={item.id}
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                /> File name: {item.fileName}, Upload time: {item.time}, Model type: {item.type}</label>
                                <button onClick={() => handleRemove(item.id)} className="destroy" />
                            </div>
                            <input className="edit" />
                        </li>
                    ))}  </ul>
            </section>
            <footer className="footer">

            </footer>

        </div>
    )
}
export default LearnList;