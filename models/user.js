import mongoose  from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    time:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    des:{
        type:String,
        required: true
    }
})

const UserModel =mongoose.model('user',UserSchema);

export default UserModel;