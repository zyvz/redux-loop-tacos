export const actions = {
  fetch: 'FETCH',
  success: 'SUCCESS',
};

export const fetchAction = () => {
  return {
    type: actions.fetch,
  }
};

export const successAction = ingredients => {
  return {
    type: actions.success,
    ingredients: ingredients
  };
};
