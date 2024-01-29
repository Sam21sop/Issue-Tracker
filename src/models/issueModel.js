import mongoose, { Schema, model } from "mongoose";

const issueSchema = new Schema({
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    labels: [{type:String}],
    author:{
        type:String, 
        required:true
    }
});

const issueModel = model("Issue", issueSchema);
export default issueModel;