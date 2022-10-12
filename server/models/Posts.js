import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
});
export default mongoose.model("Posts", Schema)