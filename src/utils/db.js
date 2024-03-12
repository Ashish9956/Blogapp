// src/utils/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
const connect = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    console.log('MongoDB URI:', uri); // Log the URI

    if (!uri) {
      throw new Error('MongoDB URI is not defined in the environment variables.');
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Connection failed!', error.message);
    throw error;
  }
};

export default connect;
