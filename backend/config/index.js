const { mongoose } = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected on port: ${connection.connection.port}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
