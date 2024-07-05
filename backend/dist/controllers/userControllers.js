import { transacionModel, userModel } from "../models/usermodel.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
export const userDetails = asyncHandler(async (req, res, next) => {
    const { email, paymentStatus, purchaseItems, transactionId } = req.body;
    try {
        let user = await userModel.findOne({ email });
        if (!user) {
            user = new userModel({ email, paymentStatus });
            await user.save();
        }
        const transaction = new transacionModel({
            transactionId,
            paymentStatus,
            user: user._id,
            purchaseItems
        });
        await transaction.save();
        user.transactions.push(transaction._id);
        await user.save();
        res.status(201).json(new ApiResponse(200, { user, transaction }, "success"));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
