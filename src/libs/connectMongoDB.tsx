import mongoose from 'mongoose';

export const connectMongoDB = async () => {
    //check for connection to MongoDB
    if(mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }
    if(process.env.MONGODB_URI){
        return await mongoose.connect(process.env.MONGODB_URI);
    } else {
        console.log("Set Mongo DB URI")
    }
    
};