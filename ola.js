const express = require('express');

const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.get('', (req, res)=>{
    const uri = path.join(__dirname, 'public', 'index.html');
    res.sendFile(uri);
})

app.listen(port, ()=> {
    console.log('app is running');
});