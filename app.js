const express = require('express');
const app= express()

app.get('/' ,(req,res) => res.send('Hello world !'))
app.listen(3000,() =>  console.log('this app will listen on the port of 3000'))