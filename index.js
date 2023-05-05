const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

const chefs=require('./data/chef.json')
const recipes= require('./data/recipes.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/chefs', (req, res) => {
    res.send(chefs)
  })

app.get('/chefs/:id', (req, res) => {
    const id=parseInt(req.params.id)
    const chefRecipe=recipes.filter(r=>parseInt(r.chefId)===id)
    res.send(chefRecipe)
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  