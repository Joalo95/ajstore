import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN!,
    options: { timeout: 5000 }
});

export async function POST(request: NextRequest) {
    const body = await request.json()
        .then(
            (data) => data as { data: { id: number, transaction_amount: number, status: string } }
        );

    //try {
    const payment = await new Payment(client).get({ id: body.data.id });

    const notification = {
        id: payment.id,
        transaction_amount: payment.transaction_amount,
        status: payment.status,
    };

    console.log(notification)
    return NextResponse.json({ notification });
    /* } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "An error occurred while processing the payment" },
            { status: 500 }
        );
    } */
}