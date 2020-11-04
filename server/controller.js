const model = require('./model.js');
const config = require('../config/config.js')
const axios = require('axios')
const db = require('../db/index.js')

const recipeSearch= (req, res)=>{
  const ingredientList = ['chicken', 'spices', 'flour', 'eggs','milk', 'lettus', 'tomatos','onion', 'butter'];

    let requestString = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${config.API_Key}&ingredients=`;


    const itemmString =  ingredientList.forEach((ingredient)=>{
      ingredient= '+' + ingredient
      requestString = requestString + ingredient

    requestString = requestString + '&number=2';

      axios.get(requestString)
      .then((results)=> {
        res.status(200).send(results)
        console.log(results,"winning")
      })
      .catch((err)=>{
        res.status(400).send(err)
        console.log('we had an error', err)
      })
    })
  }
    const getRecipe = (req, res)=> {
      // console.log(req.params.id)
      // const id = req.params.id
      let requestString = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${config.API_Key}&ingredients=`;

      axios.get(requestString)
        .then((results)=>{
          console.log(results,"winning get recipe")
          res.status.send(resulst)
        })
        .catch((err) => {
          console.log(err,"we had and error in getRecipe")
          res.status.sedn(err)
        })

    }

  const postUser = (req, res)=> {
      // console.log(req.body,"params from get user")

      const filter = (req.body.params.user_id)
      console.log(filter,"filter")
      console.log(req.body.params)
      const update = (req.body.params.pantry)
      console.log(update,"update")
      const doc = new db.Doc({pantry: update,
      user_id: filter})
      doc.save((err,results)=>{
        if (err){
          throw err
          console.log('we had an error on get user',err)
          res.status(400).send(err)
        } else{
          console.log(results, " the results from get user")
        }
      })
    }

    const getPantry =(req, res)=>{
      console.log('route hit')
      let user = req.query.user
      db.Doc.find({user_id: user}, ((err, results)=>{
        if (err){
          console.log(err,"!!!!!!!!!!!")
          res.status(400).send(err)
        } else {
          console.log(results,"!!!!!!")

          res.status(200).send(results)
        }
      }))
    }

module.exports = {
  recipeSearch,
  getRecipe,
  postUser,
  getPantry,
};
