import mongoose from "mongoose";

const connectDB=async ()=>{


    try {

        await mongoose.connect(process.env.URL);
        console.log(`Mongodb connected ${mongoose.connection.host}`)
        
    } catch (error) {
        console.log(`mongodb server issue ${error}`);
    }
}


export default connectDB;