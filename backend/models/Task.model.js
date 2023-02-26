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
      type: Date,
      default: dayjs().millisecond(),
    },
    updatedAt: {
      type: Date,
      default: dayjs().millisecond(),
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
