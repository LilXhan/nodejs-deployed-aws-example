const express = require('express');
const { createServer } = require('http');
const helmet = require('helmet');
var compression = require('compression');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const path = require('path');


const app = express();

app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/get-uuid', (req, res) =>{
  res.status(200).json({
    uuid: uuidv4()
  })
});
app.use('*', (req, res) => {
  res.status(400).send('not found')
});


const serverHttp = createServer(app);

serverHttp.listen(process.env.HTTP_PORT, process.env.IP);