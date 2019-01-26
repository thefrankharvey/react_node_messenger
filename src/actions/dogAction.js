// By default, Redux actions don’t support asynchronous actions
// like fetching data, so that's why we need Thunk aka the dispatch you see in our function below

// Also these comments are here to help me remember this shit ^ lol

export const getDogStuff = () => dispatch => {
  console.log('HIT DOG ACTION');
  fetch(`https://dog.ceo/api/breeds/image/random`)
  .then(resp => resp.json())
  .then(dog_data =>
    dispatch({
    type: 'GET_DOG_STUFF',
    dog_data
  }));
  // This ^ passes the dog_data to the reducer by calling the 'GET_DOG_STUFF' type that the reducer is looking for
}
