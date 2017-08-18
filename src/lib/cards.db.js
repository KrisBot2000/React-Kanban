let id = 26;

export const cardsFromFakeDB = [
    {
      "_id": 1,
      "task": "Make Better Styles",
      "priority": "medium",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 2,
      "task": "Make Better Styles",
      "priority": "low",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 4,
      "task": "Make Better Styles",
      "priority": "high",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 22,
      "task": "Make Better Styles",
      "priority": "blocker",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 7,
      "task": "Make Better Styles",
      "priority": "medium",
      "status": "in-progress",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 25,
      "task": "Make Better Styles",
      "priority": "Medium",
      "status": "done",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    }
  ];

export const getCardsFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(cardsFromFakeDB), 500);
});

export const addCardToFakeXHR = (card) => new Promise((resolve, reject) => {
  setTimeout(() => {
    card._id = id;
    id++;
    cardsFromFakeDB.push(card);
    resolve(cardsFromFakeDB);
  }, 500);
});