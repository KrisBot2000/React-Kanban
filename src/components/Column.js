import React from 'react';
import ColumnTitle from './ColumnTitle.js';
import Card from './Card.js';


const Column = ({ status, cards }) => {





  return (
    <div className="column">
      <ColumnTitle ColumnTitle={ status }/>
      <ul>
        {cards.map( card =>
          <Card
            key={card._id}
            id={card._id}
            task={card.task}
            priority={card.priority}
            createdBy={card.createdBy}
            assignedTo={card.assignedTo}
            status={card.status}
          />
        )
        }
      </ul>
    </div>
  );
}

export default Column;