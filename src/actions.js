/*
 * action types
 */

export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';


/*
 * action creators
 */

export function addCard(card) {
  return { type: ADD_CARD, card }
}

export function loadCards(cards) {
  return { type: LOAD_CARDS, cards }
}

export function editCard(id) {
  return { type: EDIT_CARD, id }
}

export function deleteCard(id) {
  return { type: DELETE_CARD, id }
}