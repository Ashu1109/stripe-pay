import Stripe from "stripe";
import { NextResponse,NextRequest } from "next/server";
import { dbConfig } from "../dbConfig/dbConfig"
import { Payment } from "../../../models/payment";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
dbConfig();
export async function POST(req) {
    const payload = await req.text();
    const res = JSON.parse(payload);
    const sig = req.headers.get("Stripe-Signature");

    try {
        let event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET);
        if(event.type === "checkout.session.completed"){
            const savedPayment = await Payment.create({
                paymentId: res.data.object.id,
                amount: res.data.object.amount_total,
                userId: res.data.object.client_reference_id,
                currency: res.data.object.currency,
                type: res.type
            })
            console.log(savedPayment)
        }
        return NextResponse.json({status: true,event: event.type, data: res})
    } catch (error) {
        console.log(error);
        return NextResponse.json({status: false, message: "Webhook Error"})
    }
}