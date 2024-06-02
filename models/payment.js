import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema({
    paymentId:{
        type:String,
    },
    amount:{
        type:Number,
    },
    userId:{
        type:String,
    },
    currency:{
        type:String,
    },
    type:{
        type:String,
    },
})

export const Payment = mongoose.models.Payment || mongoose.model('Payment',paymentSchema);