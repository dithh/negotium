const { mongoose } = require(`./mongoose.js`);

const Schema = mongoose.Schema;

let taskSchema = new Schema({
  topic: {
    type: String,
    required: true,
    minlength: 1
  },
  assignedTo: {
    type: String,
    required: true,
    minlength: 1
  },
  estimatedTime: {
    type: Number,
    require: true
  },
  status: {
    type: String,
    require: true,
    minlength: 1
  },
  importance: {
    type: Number,
    require: true
  }
});

let Task = mongoose.model(`Task`, taskSchema);

module.exports = {
  Task
};
