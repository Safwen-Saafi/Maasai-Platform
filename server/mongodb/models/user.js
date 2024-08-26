import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required:true},
    email:{type:String },
    profilePicture: {
        type: String, 
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        default: 'user',
    },
    dateJoined: {
        type: Date,
        default: Date.now,
    },
    allProperties: [{type: mongoose.Schema.Types.ObjectId, ref:'property'}],

});

const userModel = mongoose.model('User', UserSchema);
export default userModel;