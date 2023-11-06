import { Schema, model } from "mongoose";


const UserSchema = new Schema ({
    email: {
        type: Date,
        reqiured: true,
        unique: true
    },

    password: {
        type: String,
        reqiured: true
    }, 
}, {
        collections: 'posts',
        timestamps: true
});

export default model('User' , UserSchema);