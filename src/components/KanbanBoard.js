import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColumnContainer from './ColumnContainer.js';
import NewTaskForm from './NewTaskForm.js';
import { loadCards, addCard } from '../actions.js';

class KanbanBoard extends Component {
  constructor(props) {
    super(props);

    this.addCard = this.addCard.bind(this);

  }

  componentWillMount() {
    this.props.loadCards();
  }

  addCard (card) {
    this.props.addCard(card);
  }



  render() {
    //console.log('in render kanbanboard');
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
    //action(what's passed in)
    loadCards: () => {
      dispatch(loadCards())
    },
    addCard: (card) => {
      dispatch(addCard(card))
    }
  }
}

KanbanBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoard);

export default KanbanBoard;
