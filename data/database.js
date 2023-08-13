import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URL, {
        dbName:"API",
    })
    .then(()=>console.log("Database conected"))
    .catch((e) => console.log(e));
}