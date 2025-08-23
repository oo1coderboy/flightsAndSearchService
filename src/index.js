const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');


const setupAndStartServer = async () =>{
    
    //create the express object
    const app = express();

    // tells Express to parse incoming requests with JSON payloads
    app.use(bodyParser.json()); // middleware

    //tells Express to parse URL-encoded payloads (like from HTML forms).
    app.use(bodyParser.urlencoded({extended:true})); // middleware

    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
    })
}

setupAndStartServer();
