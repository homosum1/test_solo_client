const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); 

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

const port = process.env.PORT || 8181;

app.listen(port, function (){
    if(process.env.PORT !== undefined){
        console.log(`configured - App running on port: ${process.env.PORT}`);
    } else {
        console.log("App running on port: 8181");
    }
});