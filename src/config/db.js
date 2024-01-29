import mongoose from "mongoose";

export const connectToDB = async (baseUrl) => {
    try {
        await mongoose.connect(baseUrl
        // {
        //     useNewUrlParser:true,
        //     useUnifiedTopology:true
        // }
        );

        console.log("MongoDB connected using mongoose Successfully");

    } catch (error) {
        console.log(error);
    }
}