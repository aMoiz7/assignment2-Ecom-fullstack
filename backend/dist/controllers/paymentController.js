import { stripe } from "../app.js";
import { ApiError } from "../utils/apiErrorHandler.js";
import { asyncHandler } from "../utils/asyncHandler.js";
export const createPaymentIntent = asyncHandler(async (req, res, next) => {
    const { amount } = req.body;
    if (!amount)
        throw new ApiError(400, "amount not found");
    const paymentIntent = stripe.paymentIntents.create({ description: 'Software development services',
        shipping: {
            name: 'Jenny Rosen',
            address: {
                line1: '510 Townsend St',
                postal_code: '98140',
                city: 'San Francisco',
                state: 'CA',
                country: 'US',
            },
        },
        amount: amount,
        currency: 'usd',
        payment_method_types: ['card'], });
    return res.status(201).json({
        success: true,
        clientSecret: (await paymentIntent).client_secret,
    });
});
