const express = require('express');
const cors = require('cors');
const bodyPerser = require('body-parser');
const path = require('path');



// if(process.env.NODE_ENV !== 'production') require('dotenv').config({ path: './.env' });
if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyPerser.json());
app.use(bodyPerser.urlencoded({extended: true}));

app.use(cors()) // cors=>> cross Origine Requests

if(process.env.NODE_ENV === 'production'){
   app.use(express.static(path.join(__dirname, 'client/build')));
   app.get('*', (req, res)=>{
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
   })
}





app.listen(port, error=>{
   if(error) throw error;
   console.log('server is running on port ' + port);

})


app.post('/payment', (req, res)=>{
   
})