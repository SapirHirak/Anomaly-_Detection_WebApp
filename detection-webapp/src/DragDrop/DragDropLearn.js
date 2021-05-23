import React from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import '../App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';


function Basic({ addNewLearn }) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    useEffect(() => {
        console.log(acceptedFiles)
    }, [acceptedFiles])

    const [learnType, setlearnType] = useState("regression")


    //const [selectedValue, setSelectedValue] = React.useState(learnType);

    //upload files to server
    async function uploadFiles() {
        console.log(acceptedFiles[0])
        if (acceptedFiles[0]) {
            const data = new FormData()
            data.append("file", acceptedFiles[0])
            data.append("type", learnType);
            await axios.post("http://localhost:1234/uploadLearn", data)
            // axios.post("http://localhost:1234/uploadDetect", data)
            // axios.get("http://localhost:1234/api/model")
            addNewLearn()
        }
        else {
            alert("No file selected")
        }

    }

    function handleChooseType(learnType) {
        setlearnType(learnType)
        //setSelectedValue(learnType);
        console.log(learnType)
    }

    return (
        <div>
            {/* <div>Please enter your Learn csv file.</div> */}
            <section className="container dragDropLearn">
                <Radio
                    checked={learnType === "regression"}
                    onChange={() => handleChooseType("regression")}
                    value="regression"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                /> Regression <Radio
                    checked={learnType === "hybrid"}
                    onChange={() => handleChooseType("hybrid")}
                    value="hybrid"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                /> Hybrid
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <div className="DragDropArea">Drag some files here, or click to select files</div>
                </div>
                <aside>
                    <h5>Chosen Files:</h5>
                    <ul>{files}</ul>
                </aside>
                <Button onClick={uploadFiles}
                    variant="contained"
                    color="default"
                    startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
            </section>
        </div>
    );
}

<Basic />

export default Basic;