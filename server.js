//do all express stuffs here

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3001;

app.use(methodOverride('_method'));
app.use(bodyParser.json());

let db = require('./models');
let User = db.User;
let Card = db.Card;

app.get('/api/card', (req, res) => {
  res.json([
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
  ]);
});

app.post('/api/card', (req, res) => {

  const {
    task,
    priority,
    createdBy,
    assignedTo,
    status
  } = req.body;

  const payload = {
    task,
    priority,
    createdBy,
    assignedTo,
    status
  }

  //console.log(req.body);

  //res.send('debugging');
  //could be req.body if no changes to data are needed
  Card.create(payload)
  .then(card => {

    console.log(card);
    res.send('hello');

  })
  .catch(err => {
    console.log(err);
    res.send(err);
  })
})



//app.use(express.static('public'));





app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`listening on ${PORT}`);
});