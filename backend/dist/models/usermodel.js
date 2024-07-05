import mongoose, { Schema } from "mongoose";
const transacionDetails = new Schema({
    transactionId: {
        type: String,
    },
    paymentstatus: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    purchaseItems: [{
            type: Object,
            required: true
        }],
}, { timestamps: true });
export const transacionModel = mongoose.model("transacionDetails", transacionDetails);
const user = new Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    paymentstatus: {
        type: String,
    },
    transactions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "TransactionDetails"
        }]
}, { timestamps: true });
export const userModel = mongoose.model("user", user);
