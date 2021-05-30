import React from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import '../App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';

// dragdroplearn component
function Basic({ getLearnFiles }) {
    // files received using dropzone import
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    // accepted files from the dropzone
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    // for "realtime" updates
    useEffect(() => {
        console.log(acceptedFiles)
    }, [acceptedFiles])

    // model type (default set to regression for convenience )
    const [learnType, setlearnType] = useState("regression")

    //upload files to server
    async function uploadFiles() {
        console.log(acceptedFiles[0])
        // if we received data:
        if (acceptedFiles[0]) {
            // sets up data fields to send in the post request
            const data = new FormData()
            data.append("file", acceptedFiles[0])
            data.append("type", learnType);
            // calls HTTP POST request to send the learn file to the server
            await axios.post("http://localhost:1234/uploadLearn", data)
            getLearnFiles()
        }
        else {
            alert("No file selected")
        }

    }

    // sets model type
    function handleChooseType(learnType) {
        setlearnType(learnType)
    }

    return (
        <div>
            <section className="container dragDropLearn">
                {/* radio buttons for choosing model type */}
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
                {/* dropbox for dragging files */}
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <div className="DragDropArea">Drag some files here, or click to select files</div>
                </div>
                <aside>
                    <h5>Chosen Files:</h5>
                    <ul>{files}</ul>
                </aside>
                {/* uploads files when we click the upload button */}
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