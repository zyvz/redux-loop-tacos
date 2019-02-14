export const actions = {
  fetch: 'FETCH',
  success: 'SUCCESS',
  fail: 'FAIL'
};

export const fetchAction = query => {
  return {
    type: actions.fetch,
    query: query
  }
};

export const successAction = taco => {
  console.log('in success', taco);
  return {
    type: actions.success,
    taco: taco
  };
};