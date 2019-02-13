// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (message) => {return{
  type: ADD,
  message: message
}
}
const messageReducer = (state = [], action) => {
  switch (action.type){
    case "ADD":
      var joined = state.concat(action.message);
      state = joined;
    default:
      return state;
  }
}

const store = Redux.createStore(messageReducer);
