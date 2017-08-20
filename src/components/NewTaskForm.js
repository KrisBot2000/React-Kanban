import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions.js';

class NewTaskForm extends Component {
        constructor(props) {
          super(props);

          this.state = {
            id: '',
            newTask : '',
            newPriority : '',
            newCreatedBy: '',
            newAssignedTo: '',
            newStatus: ''
          };

          //console.log(props);

          this.handleTaskChange = this.handleTaskChange.bind(this);
          this.handlePriorityChange = this.handlePriorityChange.bind(this);
          this.handleCreatedByChange = this.handleCreatedByChange.bind(this);
          this.handleAssignedToChange = this.handleAssignedToChange.bind(this);
          this.handleStatusChange = this.handleStatusChange.bind(this);


          this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleTaskChange( event ){
          this.setState({
            newTask : event.target.value
          });
        }

        handlePriorityChange( event ){
          this.setState({
            newPriority : event.target.value
          });
        }

        handleCreatedByChange( event ){
          this.setState({
            newCreatedBy : event.target.value
          });
        }

        handleAssignedToChange( event ){
          this.setState({
            newAssignedTo : event.target.value
          });
        }

        handleStatusChange( event ){
          this.setState({
            newStatus : event.target.value
          });
        }

        handleSubmit( event ){
          event.preventDefault();
          this.props.addCard({
            task : this.state.newTask,
            priority : this.state.newPriority,
            createdBy : this.state.newCreatedBy,
            assignedTo : this.state.newAssignedTo,
            status: this.state.newStatus
          });
          // clear the input field
          this.setState({
            newTask : '',
            newPriority : '',
            newCreatedBy : '',
            newAssignedTo : '',
            newStatus : ''
          });
        }


        render() {
          return (

            <form onSubmit={ this.handleSubmit }>
              <div>
                <input type="text" placeholder="Task" onChange={this.handleTaskChange} value={this.state.newTask}/>
              </div>
              <div>
                <input type="text" placeholder="Priority" onChange={this.handlePriorityChange} value={this.state.newPriority} />
              </div>
              <div>
                <input type="text" placeholder="Created By" onChange={this.handleCreatedByChange} value={this.state.newCreatedBy}/>
              </div>
              <div>
                <input type="text" placeholder="Assigned To" onChange={this.handleAssignedToChange} value={this.state.newAssignedTo}/>
              </div>
              <div>
                <input type="text" placeholder="Status" onChange={this.handleStatusChange} value={this.state.newStatus}/>
              </div>
              <div>
                <button type="submit">Add Task</button>
              </div>
            </form>
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
    addCard: (card) => {
      dispatch(addCard(card));
    }
  }
}

NewTaskForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTaskForm);

export default NewTaskForm;