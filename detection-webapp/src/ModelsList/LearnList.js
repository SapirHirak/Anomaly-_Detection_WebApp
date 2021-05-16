import Radio from '@material-ui/core/Radio';
import React from 'react';
function LearnList({ learnFiles, removeLearn, handleChoose }) {
    function handleRemove(itemId) {
        removeLearn(itemId)
    }

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
                                    // checked={selectedValue === 'a'}
                                    onChange={() => handleChoose(item.id)}
                                    value={item.id}
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                /> {item.fileName}</label>
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