const express = require(`express`);
const bodyParser = require(`body-parser`);
const ObjectID = require(`mongodb`).ObjectID;

//const {mongoose} = require(`./mongoose.js`);
const { Task } = require(`./task.js`);

const app = express();

app.use(bodyParser.json());

app.get(`/`, (req, res) => {
  res.send("Your Negotium");
});

app.post(`/tasks`, (req, res) => {
  console.log(req.body);
  let task = new Task({
    topic: req.body.topic,
    assignedTo: req.body.assignedTo,
    status: req.body.status,
    estimatedTime: req.body.estimatedTime,
    importance: req.body.importance
  });

  task.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get(`/tasks`, (req, res) => {
  Task.find({}).then(
    tasks => {
      res.send({
        tasks
      });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

// app.get(`/epigrams/:id`, (req, res) => {
//   const id = req.params.id;
//   if (!ObjectID.isValid(id)) {
//     return res.status(400).send({
//       message: "id is not valid"
//     });
//   }
//   Epigram.findById(id).then(epigram => {
//     if (epigram) {
//       res.send({
//         epigram
//       });
//     } else {
//       res.status(404).send({
//         message: "Document with that id was not found"
//       });
//     }
//   });
// });

// app.delete(`/epigrams/:id`, (req, res) => {
//   let id = req.params.id;
//   if (validateId(id, req, res)) {
//     Epigram.findByIdAndDelete(id).then(epigram => {
//       if (epigram) {
//         res.send({
//           epigram
//         });
//       } else {
//         res.status(404).send({
//           message: `document with that id was not found`
//         });
//       }
//     });
//   }
// });

// app.patch(`/epigrams/:id`, (req, res) => {
//   const id = req.params.id;
//   if (validateId(id, req, res)) {
//     Epigram.findById(id).then(epigram => {
//       if (epigram) {
//         for (let property in req.body) {
//           epigram[property] = req.body[property];
//         }
//         epigram.save().then(doc => {
//           res.send(doc);
//         });
//       } else {
//         res.status(404).send({
//           message: `document with that id was not found`
//         });
//       }
//     });
//   }
// });

app.listen(`3000`);

// function validateId(id, req, res) {
//   if (!ObjectID.isValid(id)) {
//     res.status(400).send({
//       message: "id is not valid"
//     });
//     return false;
//   }
//   return true;
// }
