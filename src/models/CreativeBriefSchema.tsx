import mongoose from 'mongoose';

const CreativeBriefSchema = new mongoose.Schema({

});

const CBSchema = mongoose.model("Creative_Brief", CreativeBriefSchema);

export default CBSchema;