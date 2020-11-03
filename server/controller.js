const model = require('./model.js');
const config = require('../config/config.js')

recipeSearch= ()=>{
  const ingredientList = ['chicken', 'spices', 'flour', 'eggs','milk', 'lettus', 'tomatos','onion', 'butter'];

    let requestString = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${config.API_Key}&ingredients=`;


    const itemmString =  ingredientList.forEach((ingredient)=>{
      ingredient= '+' + ingredient
      requestString = requestString + ingredient
    })
    console.log(requestString, "request string")

    // need to add options ie limit returns
    requestString = requestString + '&number=2';
    console.log(requestString)
    console.log(config.API_KEY)
      axios({
        method: 'get',
        url: requestString,
    })
      .then((results)=> {
        console.log(results,"winning")
      })
      .catch((err)=>{
        console.log('we had an error', err)
      })

    }

    const getRecipe = () => {

      let requestString = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${config.API_Key}&ingredients=`;

    }

module.exports = {
  recipeSearch,
  getRecipe,
};
