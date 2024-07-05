import  Express  from "express";
import dotenv from "dotenv"
import cors from "cors"
import {connect} from "./db/dbconfig.js"
import userRouter from "./routes/userRoutes.js"
import StripeRoute from "./routes/payment.js"
import Stripe from 'stripe'

dotenv.config();

const app =  Express();

app.use(Express.json());

app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(Express.urlencoded({ extended: true }));

connect()
export const stripe = new Stripe(process.env.STRIPE_KEY!)

app.use("/api/v1/transaction" , userRouter)
app.use("/api/v1/stripe" , StripeRoute)

app.listen(process.env.PORT,()=>{
   console.log("Express server running on port ", process.env.PORT)
})