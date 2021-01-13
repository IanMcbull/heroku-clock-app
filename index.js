const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT || 7000;


//set a static page
app.use(express.static(path.join(__dirname,'public')))
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

