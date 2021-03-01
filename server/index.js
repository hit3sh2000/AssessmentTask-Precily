require('./models/db');                       //import MONGODB connction files
require("dotenv").config();
const express = require('express');                      // import  express
const cors = require('cors')
const img = require('./routes/img');    // import img Controller  
const app = express()                  //Asigning express    
     
app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get('/hello', (req, res) => {
  res.send('Hello World');                        //simple route for hello World
});

//  setting router 
app.use('/',img);
       
const PORT = process.env.PORT || 4000;
app.listen(PORT,console.log(`Port is running on http://localhost:${PORT}`));