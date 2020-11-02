const mongoose = require('mongoose');
const config = require('config');


const db = config.get('mongoURI');


const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err);
    // Exit process with failuer
    process.exit(1);
  }
}

module.exports = connectDB;