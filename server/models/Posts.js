import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    text: {
        type: String,
        
    },
    image:{
        type: Buffer
    }
});
export default mongoose.model("Posts", Schema)