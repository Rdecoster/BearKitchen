const express = require('express');
var path = require('path');
const app = express();
const port = 3000
const config = require('../config/config.js')
// const controller = require('./controller.js');
const axios = require('axios')
const controller = require('./controller.js')


// middleware

app.use(express.json());
// serving static files;
app.use('/', express.static(path.join(__dirname, '../client/dist')));



  app.get('/search', controller.recipeSearch)

  app.get('/recipe/:id', controller.getRecipe)

  app.post('/user',controller.postUser)

  app.get('/getPantry',controller.getPantry)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})