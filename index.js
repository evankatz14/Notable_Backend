const express = require('express');
const server = express();
const apiRoutes = require('./routes/api-routes.js')
const cors = require('cors')

server.use(express.json());
server.use(cors())
server.use("/api/visitors", apiRoutes)

server.get('/', (req, res) => {
    res.send("Hello, World!")
  });


const port = process.env.PORT || 5000;

server.listen(port, ()=> console.log(`\n Running on port ${port}\n`))