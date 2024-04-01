import { NextRequest, NextResponse } from "next/server";

import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN!,
    options: { timeout: 5000 }
});

interface Item {
    id: string;
    title: string;
    description: string;
    quantity: number;
    price: number;
}

interface ProcessedItem {
    id: string;
    title: string;
    description: string;
    quantity: number;
    unit_price: number;
}

export async function POST(req: NextRequest) {

    const items: { items: Item[] } = await req.json();
    const itemsArray = items.items;
    const processedItems: ProcessedItem[] = itemsArray.map(({ id, title, description, quantity, price }) => ({ id, title, description, quantity, unit_price: price }));

    try {
        const preference = await new Preference(client).create({
            body: {
                items: processedItems,
            },
        });

        return NextResponse.json({ url: preference.sandbox_init_point });
    } catch (e) {
        return NextResponse.error({ status: 500, statusText: e.message });
    }
}
