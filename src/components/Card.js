import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard } from '../actions.js';


class Card extends Component {
  constructor(props) {
    super(props);
    //console.log(props);

    this.handleDeleteCard = this.handleDeleteCard.bind(this);

  }

  handleDeleteCard(){
    //console.log('handleDeleteCard');
    this.props.deleteCard(this.props.id);
  }


  render(){
    return (
      <div className="card">
        <h3>{ this.props.task }</h3>
        <h3>Priority: { this.props.priority }</h3>
        <h3>Created By: { this.props.createdBy }</h3>
        <h3>{ this.props.assignedTo }</h3>
        <button>Edit</button>
        <button onClick={ this.handleDeleteCard }>Delete</button>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {};
}


//create a method to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    //action action(what's passed in)
    deleteCard: (id) => {
      dispatch(deleteCard(id));
    }
  }
}

Card = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);


export default Card;