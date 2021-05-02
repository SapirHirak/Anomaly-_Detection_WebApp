// https://www.npmjs.com/package/react-dropzone
import React, {useCallback} from 'react'
import Dropzone from 'react-dropzone'
import {useDropzone} from 'react-dropzone'
function DragDrop() {

    /*function handleEnter(event) {
        if (event.code === 'Enter') {
            addItem(event.target.value);
        }
    }*/
    
    const onDrop = useCallback((acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()
  
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
          const binaryStr = reader.result
          console.log(binaryStr)
        }
        reader.readAsArrayBuffer(file)
      })
      
    }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})
  
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    )

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
}

export default DragDrop;