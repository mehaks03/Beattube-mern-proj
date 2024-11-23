import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const connectDatabase = async() => {
    try {
        await mongoose.connect(process.env.DB);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDatabase;