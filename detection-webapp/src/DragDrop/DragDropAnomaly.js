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

/*const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function Accept(props) {
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: 'image/jpeg, image/png'
    });

    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
                {errors.map(e => (
                    <li key={e.code}>{e.message}</li>
                ))}
            </ul>
        </li>
    ));
    const classes = useStyles();
    return (
        <div >
            <div className="greatTitle">Great! now, add your anomaly csv file.</div>
            <section className="container dragDropAnomaly">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                    <em>(Only *.jpeg and *.png images will be accepted)</em>
                </div>
                <aside>
                    <h4>Accepted files</h4>
                    <ul>{acceptedFileItems}</ul>
                    <h4>Rejected files</h4>
                    <ul>{fileRejectionItems}</ul>
                </aside>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                >
                    <i class="fas fa-plane-departure"></i>

                            Fly!
                </Button>
            </section >

        </div >
    );
}

<Accept />

export default Accept;*/

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
        const data = new FormData()
        data.append("file", acceptedFiles[0])
        data.append("id", currentIdModel);
        await axios.post("http://localhost:1234/detect", data)
        // axios.get("http://localhost:1234/api/model")
        getAnomalies()

    }

    return (
        <div>
            {/* <div className="greatTitle">Great! now, add your anomaly csv file.</div> */}
            <section className="container dragDropAnomaly">

                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p className="DragDropArea">Drag some files here, or click to select files</p>
                </div>
                <aside>
                    {/* <h4>Files</h4> */}
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