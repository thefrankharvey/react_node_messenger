

export default function(state = [], action) {
  console.log("HIT DOG REDUCER");
  console.log(action.dog_data);
             // THIS ^ IS HOW TO ACCESS THE DOG DATA WE PASSED FROM THE ACTION
             // It will return undefined a few times until the data comes in unless we implement error handling
  switch (action.type) {
    case 'GET_DOG_STUFF':
      return {
        ...action.dog_data
      }
    default:
      return state;
  }
}
