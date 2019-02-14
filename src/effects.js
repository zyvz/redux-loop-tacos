const url = 'http://taco-randomizer.herokuapp.com/random/';

export const fetchRecipeEffect = () => {
  return fetch(url).then(resp => resp.json());
};