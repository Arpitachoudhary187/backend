import mongoose from 'mongoose';
export const connectDB = async () => {
    try {
       let res = mongoose.connect("mongodb://0.0.0.0/v-mart");
       if(res){
        console.log("mongodb connected");
       }

    } catch (error) {
        console.log("error while connnecting DB", error);
    }
};