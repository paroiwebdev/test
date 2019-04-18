const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.end('hello this is a test');
});


app.listen(4000);