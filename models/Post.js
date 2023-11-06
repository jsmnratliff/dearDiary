import { Schema, model } from "mongoose";


const PostSchema = new Schema ({
    date: {
        type: Date,
        reqiured: true,
        default: Date.now
    },

    title: {
        type: String,
        reqiured: true
    },

    content: {
        type: String,
        reqiured: true
    }, 
}, {
        collections: 'posts',
        timestamps: true
});

export default model('Post' , PostSchema);