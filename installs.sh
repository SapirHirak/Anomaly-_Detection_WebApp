#!/bin/bash

# installs nodejs
dpkg --configure -a
apt install nodejs
apt install npm

# goes to each directory in the project and installs te needed packages
cd detection-webapp
npm install
cd ../Addon
npm install
cd ../backend
npm install
