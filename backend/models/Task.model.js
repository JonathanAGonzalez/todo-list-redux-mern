const { mongoose } = require('mongoose');
const dayjs = require('dayjs');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
    updatedAt: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
