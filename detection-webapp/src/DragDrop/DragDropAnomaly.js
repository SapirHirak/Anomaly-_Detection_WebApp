import React from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '@material-ui/core/Button';
import '../App.css';
import axios from "axios"
import { useEffect } from 'react';

// dragdroplearn component
function Basic({ getAnomalies, currentIdModel }) {
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

    //upload files to server
    async function uploadDetectFile() {
        // if we received data:
        if (acceptedFiles[0]) {
            // sets up data fields to send in the post request
            const data = new FormData()
            data.append("file", acceptedFiles[0])
            data.append("id", currentIdModel);
            // calls HTTP POST request to send the anomaly file to the server
            await axios.post("http://localhost:1234/detect", data)
            getAnomalies()
        }
        else {
            alert("No file selected")
        }

    }

    return (
        <div>
            <section className="container dragDropAnomaly">
                {/* dropbox element for uploading anomaly file */}
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <div className="DragDropArea">Drag some files here, or click to select files</div>
                </div>
                <aside>
                    {<h5>Chosen Files:</h5>}
                    <ul>{files}</ul>
                </aside>
                {/* upload button which will send the request */}
                <Button onClick={uploadDetectFile}
                    variant="contained"
                    color="default"
                >
                    <i class="fas fa-plane-departure"></i>
                    Fly!
                </Button>

            </section>
        </div>
    );
}

<Basic />

export default Basic;