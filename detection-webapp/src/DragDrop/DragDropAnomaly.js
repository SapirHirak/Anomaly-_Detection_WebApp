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
import { useEffect } from 'react';

function Basic({ getAnomalies, currentIdModel }) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    useEffect(() => {
        console.log(acceptedFiles)
    }, [acceptedFiles])

    //upload files to server
    async function uploadDetectFile() {
        if (acceptedFiles[0]) {
            const data = new FormData()
            data.append("file", acceptedFiles[0])
            data.append("id", currentIdModel);
            await axios.post("http://localhost:1234/detect", data)
            // axios.get("http://localhost:1234/api/model")
            getAnomalies()
        }
        else {
            alert("No file selected")
        }

    }

    return (
        <div>
            <section className="container dragDropAnomaly">

                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <div className="DragDropArea">Drag some files here, or click to select files</div>
                </div>
                <aside>
                    {<h5>Chosen Files:</h5>}
                    <ul>{files}</ul>
                </aside>
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