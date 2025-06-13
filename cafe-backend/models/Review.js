import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user: String,
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
}, { timestamps: true});

export default mongoose.model("Review", reviewSchema);