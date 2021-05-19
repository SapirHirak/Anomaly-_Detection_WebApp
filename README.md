# Advanced Programming 2 - Anomaly Detection WebApp

## Description
The client holds and run the HTML page. When the user want to upload a model, the client sends a post request to the server and the server uses the API to process the file and create the model, the API saves the model in a map, the server saves it in an array of models and each element holds the model's id, file name, type(regression or hybrid) and it's upload time.
when the user wants to upload a test file to detect anomalies the client sends a post request to the server to upload a test file, the server passes it to the API and which process it and returns a json object with the detected anomalies, and the server sends it to the client which displays the anomalies in a table and also a graph.
when the user wants to delete a model the client sends a delete request to the server which deletes the requested model from it's list via the model ID and use the API to delete it from the model map that the API holds.

## Installation
1. Use linux OS.
Note: If you are using a virtual machine download the files on a non-mounted directory(not a directory that is shared with OSs).
2. Download the project and extract from the zip file.
3. Open the terminal in the Anomaly_Detection_WebApp directory and type "chmod 777 installs.sh", after that type "sudo ./installs.sh", this will install all the required packages to run the app.
4. Open the terminal in the backend directory and type "node server.js", now the server is up and running.
5. Open the terminal in the backend directory and type "npm start", now the client is up and running and should open the browser on "localhost:9876" address.
6. Now the app is running, and you can upload your models(train files) and test files to check for anomalies that shows in a graph and a table below.
