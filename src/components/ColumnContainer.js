import React from 'react';
import Column from './Column.js';



const ColumnContainer = ({ status, cards }) => {


  let inProgressArray = cards.filter((card)=> {
    return card.status==='in-progress';
  });

  let inQueueArray = cards.filter((card)=> {
    return card.status==='in-queue';
  });

  let doneArray = cards.filter((card)=> {
    return card.status==='done';
  });

  return (
    <div className="columnContainer">
      <div>
        <h1 className="kanban">KANBAN</h1>
        <button className="newTaskButton">+ NEW TASK</button>
      </div>
      <Column status={ 'IN-QUEUE' } cards={inQueueArray}/>
      <Column status={ 'IN-PROGRESS' } cards={inProgressArray}/>
      <Column status={ 'DONE' } cards={doneArray}/>
    </div>
  );
}

export default ColumnContainer;