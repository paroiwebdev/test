const express = require('express');
const app = express();

test for create a branch;


app.get('/',(req,res)=>{
    res.end('hello this is a test');
});


app.listen(4000);
