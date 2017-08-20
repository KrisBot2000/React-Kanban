import { LOAD_CARDS, ADD_CARD, DELETE_CARD } from './actions.js';
//creating a variable ADD_CARD = 'ADD_CARD'


//console.log(cardsFromFakeDB)
const initialState = { cards: [] };
const reducer = (state = initialState, action)=> {
  switch (action.type) {

    case LOAD_CARDS:
      //creating a new object, obj taking properties from, take cards array from action object (assigned in actions) and attach to cards property of new (state) object
      return Object.assign({}, state, { cards: action.cards });

    case ADD_CARD:
      //new object creating, obj taking properties from, change wanting to apply (an array of new card merged with current card array)
      return Object.assign({}, state, { cards: [ action.card ].concat(state.cards) });

    // case EDIT_CARD:
    // //   return state.map(todo => {
    // //     if (todo.id === action.id) { todo.completed = !todo.completed; }
    // //     return todo;
    // //   });
    // // default:
    // return state;

    case DELETE_CARD:
      //console.log(action.id);
      let newCardArray = state.cards.filter((card)=> {
        return card._id!==action.id;
      });
      return Object.assign({}, state, { cards: newCardArray });

    //DEFAULT
    default: return state;
  }
}

export default reducer;
