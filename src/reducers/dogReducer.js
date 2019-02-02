export default function(state = [], action) {
  switch (action.type) {
    case "GET_DOG_STUFF":
      return {
        ...action.dog_data
      };
    default:
      return state;
  }
}
