const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.end('my first express script!');
});

app.listen(4000);