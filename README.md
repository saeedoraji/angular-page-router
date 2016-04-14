# B2B-Client by RM Innovation

this project is based on angular-seed structure that mixed by metronic 4 admin template.
for runing application we use http-server cli tools.


### Technologies

- Angular Js
- Socket IO


# configurations

add a new file with below details :
app/resource/js/sails.io.config.js

this file contains configuration of socket connection to server. beacuse it is user configurable we put this file in .gitignore then you need to manually make and config it.

file content : 
// -----------------------------------------------------------
// sails.io.js , server connection configuration
window.myPort='3000';
window.myHost='localhost';
window.serviceAddress ='/api';
window.customServiceAddress ='/customApi';
// -----------------------------------------------------------