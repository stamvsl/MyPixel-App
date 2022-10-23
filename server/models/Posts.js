import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    image:{
        type: String
    },
    text: {
        type: String,
        
    }
    
});

Schema.methods.toJSON = function () {
    const result = this.toObject();
    delete result.photo;
    return result;
  };


export default mongoose.model("Posts", Schema)