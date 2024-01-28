import mongoose from "mongoose";

export const connectToDB = async (baseUrl, databaseName) => {
    try {
        await mongoose.connect(`mongodb://${baseUrl}/${databaseName}`
        // {
        //     useNewUrlParser:true,
        //     useUnifiedTopology:true
        // }
        );

        console.log("MongoDB connected using mongoose");

    } catch (error) {
        console.log(error);
    }
}