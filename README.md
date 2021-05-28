# Advanced Programming 2 - Anomaly Detection WebApp

## Description
Server port - 1234  
Client port - 9876  
The client holds and runs the HTML page. When the user wants to upload a model, the client sends an HTTP POST request to the server and the server uses the API to process the file and create the model, the API saves the model in a map, the server saves it in an array of models and each element holds the model's id, file name, type (regression or hybrid), and it's upload time.  
When the user wants to upload a test file to detect anomalies the client sends an HTTP POST request to the server to upload a test file, the server passes it to the API which processes it and returns a json object with the detected anomalies, and the server sends it to the client which displays the anomalies in a table.  
When the user wants to delete a model the client sends a delete request to the server which deletes the requested model from it's list via the model ID and use the API to delete it from the model map that the API holds.

## Server API
To upload a learn file to the server we use post("http://localhost:1234/uploadLearn", data).
the request expects to receive the file and the anomaly detection type in the data.
for example:

    const data = new FormData()
                data.append("file", acceptedFiles[0])
                data.append("type", learnType);
                await axios.post("http://localhost:1234/uploadLearn", data)

to upload a test file to the server we use post("http://localhost:1234/detect", data).  
the request expects to receive the file and the ID of the model you want to detect by in the data.  
for example:

    const data = new FormData()
                data.append("file", acceptedFiles[0])
                data.append("id", currentIdModel);
                await axios.post("http://localhost:1234/detect", data)

to get the model list from the server we use get("http://localhost:1234/getModels").  
the request returns the model list as a json.  
for example:

        await axios.get("http://localhost:1234/getModels")

to get the anomalies that were detected we use get(http://localhost:1234/getAnomaly).  
the request returns the detected anomalies as a json.  
for example:

    axios.get(`http://localhost:1234/getAnomaly`)

to delete a model from the server we use delete("http://localhost:1234/deleteModel", {data}).  
the request expects to receive the ID of the model we want to delete in the data.  
for example:

    const data = {
            id: itemId
            }
    await axios.delete("http://localhost:1234/deleteModel", {data})


### Directories
The Addon directory contains the files for the anomaly detector which is implemented in c++ and the API to use it in the javascript code.  
The backend directory contains the files for the server.  
The detection-webapp directory contains the files for the client- the web page and it's elements (drag and drop, models table, etc...).  

## Packages
    node.js
    react
    axios
    
    these will get installed when you use npm install in the terminal:
    "@fortawesome/fontawesome-free": "^5.15.3"
    "@material-ui/core": "^4.11.4"
    "@material-ui/icons": "^4.11.2"
    "@testing-library/jest-dom": "^5.12.0"
    "@testing-library/react": "^11.2.6"
    "@testing-library/user-event": "^12.8.3"
    "axios": "^0.21.1"
    "bootstrap": "^5.0.0"
    "node-gyp": "^8.0.0"
    "react": "^17.0.2"
    "react-dom": "^17.0.2"
    "react-dropzone": "^11.3.2"
    "react-scripts": "4.0.3"
    "recharts": "^2.0.9"
    "web-vitals": "^1.1.1"
    "body-parser": "^1.19.0"
    "cors": "^2.8.5"
    "ejs": "^3.1.6"
    "express": "^4.17.1"
    "express-fileupload": "^1.2.1"
    
## Installation
1. Use linux OS.  
Note: If you are using a virtual machine download the files on a non-mounted directory(not a directory that is shared with OSs).
2. Download the project and extract from the zip file.
3. Open the terminal in the Anomaly_Detection_WebApp directory and type "chmod 777 installs.sh", after that type "sudo ./installs.sh", this will install all the required packages to run the app.  
NOTE: if there are errors in this step or if one of the next two steps fail, run each line in the installs from your terminal.
4. Open the terminal in the backend directory and type "node server.js", now the server is up and running.
5. Open the terminal in the backend directory and type "npm start", now the client is up and running and should open the browser on "localhost:9876" address.
6. Now the app is running, and you can upload your models(train files) and test files to check for anomalies that shows in a table below.

#### How it looks:
![image](https://user-images.githubusercontent.com/73121058/119548606-0ec25a80-bd9f-11eb-92d2-4ff2c3199909.png)

### UML
![UML](https://user-images.githubusercontent.com/74674979/119004229-0a5d0280-b997-11eb-9251-789066cd3b5a.png)
