// const mongoose = require('mongoose');
import mongoose from 'mongoose';

export default async () => {
  if (mongoose.connections[0].readyState) return;
  // Using new database connection
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
