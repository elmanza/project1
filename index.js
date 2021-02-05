const express = require('express');
const app = express();
const morgan = require('morgan');
const serverRoutes = require('./routes/index');
const db = require('./config/db.js');

//SETTINGS
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(__dirname + 'public'));
app.use('/files', express.static(__dirname + 'files'));
app.use(morgan('dev'));




serverRoutes(app);

app.listen(PORT,()=>{
    console.log(`Listen http://localhost:${PORT}`);
    const ll = db.connect();
    // console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiii", ll);
});