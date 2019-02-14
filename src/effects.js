const url = 'http://taco-randomizer.herokuapp.com/random/';

export const fetchIngredientsEffect = () => {
  return fetch(url).then(resp => resp.json()).then(resp => {
    return Object.values(resp).map(ingredient => {
      return {
        name: ingredient.name,
        recipe: ingredient.recipe
      }
    })
  });
};