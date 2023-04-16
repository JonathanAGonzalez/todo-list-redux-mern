const { mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');

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
      default: new Date().getFullYear,
    },
    updatedAt: {
      type: String,
      required: true,
      default: new Date().getFullYear,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
