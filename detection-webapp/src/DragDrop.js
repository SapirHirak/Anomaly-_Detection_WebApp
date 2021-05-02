// https://www.npmjs.com/package/react-dropzone
// import React, {useCallback} from 'react'
// import Dropzone from 'react-dropzone'
// import {useDropzone} from 'react-dropzone'
// function DragDrop() {

    /*function handleEnter(event) {
        if (event.code === 'Enter') {
            addItem(event.target.value);
        }
    }*/
    
    // const onDrop = useCallback((acceptedFiles) => {
    //   acceptedFiles.forEach((file) => {
    //     const reader = new FileReader()
  
    //     reader.onabort = () => console.log('file reading was aborted')
    //     reader.onerror = () => console.log('file reading has failed')
    //     reader.onload = () => {
    //     // Do whatever you want with the file contents
    //       const binaryStr = reader.result
    //       console.log(binaryStr)
    //     }
    //     reader.readAsArrayBuffer(file)
    //   })
      
    // }, [])
    // const {getRootProps, getInputProps} = useDropzone({onDrop})
  
    // return (
    //   <div {...getRootProps()}>
    //     <input {...getInputProps()} />
    //     <p>Drag 'n' drop some files here, or click to select files</p>
    //   </div>
    // )

    // return (
        
    //     // <div>
    //     //     Im DragDrop
    //     // </div>
    //     <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
    //       {({getRootProps, getInputProps}) => (
    //         <section>
    //           <div {...getRootProps()}>
    //             <input {...getInputProps()} />
    //             <p>Drag learn csv here</p>
    //           </div>
    //         </section>
    //       )}
    //     </Dropzone>
        
    // )
import React from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';

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

    return (
        <section className="container dragDrop">
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
        </section>
    );
}

<Accept />

export default Accept;