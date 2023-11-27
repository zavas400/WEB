const express = require('express');

const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.listed(port, ()=> {
    console.log('app is running');
});