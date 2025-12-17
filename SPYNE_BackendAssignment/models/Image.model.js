const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
    {
        serialNumber: {
            type: String,
            required: true,
            trim: true,
        },
        productName: {
            type: String,
            required: true,
            trim: true,
        },
        inputImages: {
            type: [String],  
            required: true,
        },
        outputImages: {
            type: [String], 
            default: [], 
        },
        requestId:{
            type:String
        },
        status: {
            type: String,
            enum:  ["pending", "completed"],
            default: "pending",
        },
    },
    {
        timestamps: true,
        versionKey: false,
        strict: true,
    }
);

module.exports = mongoose.model("Image", imageSchema);
