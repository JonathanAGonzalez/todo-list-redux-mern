const dayjs = require('dayjs');
const { mongoose } = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String,
      required: true,
      default: 'https://i.ibb.co/VSxxrcp/images.png',
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: String,
      required: true,
      default: dayjs().millisecond(),
    },
    updatedAt: {
      type: String,
      required: true,
      default: dayjs().millisecond(),
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   createdAt: string;
//   updatedAt: string;
// }
