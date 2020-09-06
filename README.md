# BärnHäckt4
This is the project of the team named Danger Rangers.
We have created a solution for BE! Tourismus AG which combines some Guestcards. 
Every client receive an individual QR Code.
This code can be read by an own created app.
Due to this code the clients can get discounts for different destinations and activities.
The clients have the possibility to use either the app or a website. 

Our project is separated into a Java Spring Boot Backend and an Angular Frontend,
 
## Installation Java Backend
Clone this repository. Use maven to build the project with `mvn clean package install`.
After that you should start the Spring Boot Application

## Installation Angular Frontend
Install all used node_modules for this project with `npm i` or `npm install`.
It will install everything you need to build the project.
Start the web-app with the following command `npm run dev`.
The website will open automatically because behind the command is a flag `--open`

## Installation Scanner App
At the moment there is only a web-app available to scan codes. 
To use the scanner just install the needed node_modules with `npm i` or `npm install`
If you want to start the scanner just run `npm run dev`.
!Important! --> To use the camera, you should allow access to the camera.

