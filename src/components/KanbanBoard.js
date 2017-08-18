import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColumnContainer from './ColumnContainer.js';
import NewTaskForm from './NewTaskForm.js';
import {getCardsFromFakeXHR, addCardToFakeXHR} from '../lib/cards.db.js';
import { loadCards } from '../actions.js';

class KanbanBoard extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    console.log('in DidMount');
    getCardsFromFakeXHR()
    .then(cards => {
      this.props.loadCards(cards);
    })
  }



  render() {
    console.log('in render kanbanboard');
    return (
      <div className='KanbanBoard'>

        <ColumnContainer cards={this.props.cards}/>
        <NewTaskForm/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    cards : state.cards
  };
}


//create a method to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    //action action(what's passed in)
    loadCards: (cards) => {
      dispatch(loadCards(cards));
    }
  }
}

KanbanBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoard);

export default KanbanBoard;
