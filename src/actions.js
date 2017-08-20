/*
 * action types
 */
//creating a variable that represents "magic strings"
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';


/*
 * action creators
 */

// export function addCard(card) {
//   return { type: ADD_CARD, card }
// }

// use thunks!
export const addCard = card => {

  // instead of returning an action object
  // return a function, thunk
  return ( dispatch ) => {
    // this area, happens immediately
    //   you can add loading animations

    fetch('api/card', {
      method: 'post',
      body: JSON.stringify(card),
      headers: { 'Content-Type': 'application/json' }
    })
      // .then( cards => cards.json() )
      .then( cards => {
        //this happens after the promise is resolved
      console.log(cards);

        // dispatch({
        //   type: ADD_CARD,
        //   card
        // });
      });
  }
};

//WAS DONE THIS WAY BEFORE REDUX
// export function loadCards(cards) {
//   return { type: LOAD_CARDS, cards }
// }

export const loadCards = () => {

  return dispatch => {
    // we must invoke dispatch and pass in the action to dispatch()
    fetch('/api/card')
      .then( cards => cards.json() )
      .then( cards => {
        dispatch({
          type: LOAD_CARDS,
          cards
        });
      });
  }
};

export function editCard(id) {
  return { type: EDIT_CARD, id }
}

export function deleteCard(id) {
  return { type: DELETE_CARD, id }
}